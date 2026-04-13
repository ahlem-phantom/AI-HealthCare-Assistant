const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { v4: uuid } = require('uuid');

const STATE_VERSION = 2;
const GENESIS_TIMESTAMP = 1700000000000;
const GENESIS_NONCE = 100;
const GENESIS_HASH = '0';
const GENESIS_PREVIOUS_HASH = '0';

const canonicalStringify = (value) => {
    if (Array.isArray(value)) {
        return `[${value.map((item) => canonicalStringify(item)).join(',')}]`;
    }

    if (value && typeof value === 'object') {
        const keys = Object.keys(value)
            .filter((key) => value[key] !== undefined)
            .sort();

        return `{${keys.map((key) => `${JSON.stringify(key)}:${canonicalStringify(value[key])}`).join(',')}}`;
    }

    return JSON.stringify(value);
};

const sha256Hex = (value) => crypto.createHash('sha256').update(value).digest('hex');

const stripUndefined = (obj) => {
    const out = {};
    Object.keys(obj).forEach((key) => {
        if (obj[key] !== undefined) {
            out[key] = obj[key];
        }
    });
    return out;
};

class BlockchainLedger {
    constructor(options = {}) {
        const nodePort = process.argv[2] || process.env.PORT || 3001;

        this.currentNodeUrl = options.currentNodeUrl
            || process.argv[3]
            || process.env.BLOCKCHAIN_NODE_URL
            || `http://localhost:${nodePort}`;

        this.storagePath = options.storagePath
            || process.env.BLOCKCHAIN_STATE_PATH
            || path.join(__dirname, '..', '..', 'data', 'ledger-state.json');

        this.disablePersistence = options.disablePersistence === true;
        this.defaultDifficulty = Math.max(2, Number(options.defaultDifficulty || process.env.BLOCKCHAIN_DIFFICULTY || 4));
        this.currentDifficulty = this.defaultDifficulty;
        this.targetBlockTimeMs = Number(options.targetBlockTimeMs || process.env.BLOCKCHAIN_TARGET_BLOCK_TIME_MS || 30000);
        this.acceptUnsignedMedicalEvents = String(
            options.acceptUnsignedMedicalEvents
            ?? options.acceptUnsignedMedicalTransactions
            ?? process.env.BLOCKCHAIN_ACCEPT_UNSIGNED_MEDICAL_EVENTS
            ?? process.env.BLOCKCHAIN_ACCEPT_UNSIGNED_MEDICAL
            ?? 'true'
        ).toLowerCase() !== 'false';

        this.chain = [];
        this.pendingTransactions = [];
        this.networkNodes = [];

        this._loadState();
    }

    toJSON() {
        return this.getBlockchainSnapshot();
    }

    _loadState() {
        if (this.disablePersistence) {
            this._createGenesisBlock();
            return;
        }

        try {
            if (!fs.existsSync(this.storagePath)) {
                this._createGenesisBlock();
                this._persistState();
                return;
            }

            const raw = fs.readFileSync(this.storagePath, 'utf8');
            const parsed = JSON.parse(raw);

            this.chain = Array.isArray(parsed.chain) ? parsed.chain : [];
            this.pendingTransactions = Array.isArray(parsed.pendingTransactions) ? parsed.pendingTransactions : [];
            this.networkNodes = Array.isArray(parsed.networkNodes) ? parsed.networkNodes : [];
            this.currentDifficulty = Math.max(2, Number(parsed.currentDifficulty || this.defaultDifficulty));

            if (!this.chain.length || !this.chainIsValid(this.chain)) {
                this.chain = [];
                this.pendingTransactions = [];
                this.networkNodes = [];
                this.currentDifficulty = this.defaultDifficulty;
                this._createGenesisBlock();
                this._persistState();
            }
        } catch (error) {
            this.chain = [];
            this.pendingTransactions = [];
            this.networkNodes = [];
            this.currentDifficulty = this.defaultDifficulty;
            this._createGenesisBlock();
            this._persistState();
        }
    }

    _persistState() {
        if (this.disablePersistence) {
            return;
        }

        const dir = path.dirname(this.storagePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(this.storagePath, JSON.stringify(this.getBlockchainSnapshot(), null, 2));
    }

    _createGenesisBlock() {
        const genesisBlock = {
            index: 1,
            timestamp: GENESIS_TIMESTAMP,
            transactions: [],
            nonce: GENESIS_NONCE,
            hash: GENESIS_HASH,
            previousBlockHash: GENESIS_PREVIOUS_HASH,
            difficulty: this.defaultDifficulty,
            merkleRoot: this.calculateMerkleRoot([]),
            minedBy: 'genesis',
            version: STATE_VERSION
        };

        this.chain = [genesisBlock];
        this.pendingTransactions = [];
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    getIdentityFromPublicKey(publicKeyBase64) {
        return sha256Hex(publicKeyBase64).substring(0, 40);
    }

    getAddressFromPublicKey(publicKeyBase64) {
        return this.getIdentityFromPublicKey(publicKeyBase64);
    }

    generateIdentityCredentials() {
        const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519', {
            publicKeyEncoding: { type: 'spki', format: 'der' },
            privateKeyEncoding: { type: 'pkcs8', format: 'der' }
        });

        const publicKeyBase64 = publicKey.toString('base64');
        return {
            identity: this.getIdentityFromPublicKey(publicKeyBase64),
            address: this.getIdentityFromPublicKey(publicKeyBase64),
            publicKey: publicKeyBase64,
            privateKey: privateKey.toString('base64')
        };
    }

    generateWallet() {
        return this.generateIdentityCredentials();
    }

    _mapLegacyType(type) {
        if (type === 'medical') return 'medical_event';
        if (type === 'reward') return 'system_event';
        if (type === 'transfer') return 'signed_event';
        return type;
    }

    _normalizeType(payload) {
        if (payload.type) {
            return this._mapLegacyType(String(payload.type).toLowerCase());
        }

        if (typeof payload.amount === 'number' && Number.isFinite(payload.amount)) {
            return (payload.sender === '00' || payload.sender === 'SYSTEM') ? 'system_event' : 'signed_event';
        }

        return 'medical_event';
    }

    _normalizeDate(value) {
        if (!value) {
            return new Date().toISOString();
        }

        const parsedDate = new Date(value);
        if (Number.isNaN(parsedDate.getTime())) {
            return new Date().toISOString();
        }

        return parsedDate.toISOString();
    }

    normalizeTransactionPayload(senderOrPayload, recipient, doctor, date, description) {
        const payload = (typeof senderOrPayload === 'object' && senderOrPayload !== null)
            ? senderOrPayload
            : {
                sender: senderOrPayload,
                recipient,
                doctor,
                date,
                description
            };

        const normalized = stripUndefined({
            type: this._normalizeType(payload),
            sender: payload.sender,
            recipient: payload.recipient,
            amount: (typeof payload.amount === 'number' && Number.isFinite(payload.amount)) ? Number(payload.amount) : undefined,
            doctor: payload.doctor,
            date: this._normalizeDate(payload.date),
            description: payload.description,
            metadata: payload.metadata,
            publicKey: payload.publicKey,
            signature: payload.signature,
            timestamp: Number(payload.timestamp || Date.now()),
            transactionId: payload.transactionId || payload.txId || uuid().split('-').join('')
        });

        return normalized;
    }

    calculateTransactionHash(transaction) {
        const tx = { ...transaction };
        delete tx.signature;
        delete tx.hash;
        return sha256Hex(canonicalStringify(tx));
    }

    createNewTransaction(senderOrPayload, recipient, doctor, date, description) {
        return this.normalizeTransactionPayload(senderOrPayload, recipient, doctor, date, description);
    }

    signEvent(transaction, privateKeyBase64) {
        const tx = this.normalizeTransactionPayload(transaction);
        const txHash = this.calculateTransactionHash(tx);

        const privateKey = crypto.createPrivateKey({
            key: Buffer.from(privateKeyBase64, 'base64'),
            format: 'der',
            type: 'pkcs8'
        });

        const signature = crypto.sign(null, Buffer.from(txHash), privateKey).toString('base64');
        return {
            ...tx,
            hash: txHash,
            signature
        };
    }

    signTransaction(transaction, privateKeyBase64) {
        return this.signEvent(transaction, privateKeyBase64);
    }

    _isNonEmptyString(value) {
        return typeof value === 'string' && value.trim().length > 0;
    }

    _isMedicalEventValid(tx) {
        return this._isNonEmptyString(tx.doctor)
            && this._isNonEmptyString(tx.description)
            && this._isNonEmptyString(tx.sender)
            && this._isNonEmptyString(tx.recipient)
            && this._isNonEmptyString(tx.date);
    }

    _isSignedEventValid(tx) {
        return this._isNonEmptyString(tx.sender)
            && this._isNonEmptyString(tx.recipient)
            && (!Object.prototype.hasOwnProperty.call(tx, 'amount') || (typeof tx.amount === 'number' && Number.isFinite(tx.amount) && tx.amount > 0));
    }

    _isSystemEventValid(tx) {
        return (tx.sender === '00' || tx.sender === 'SYSTEM')
            && this._isNonEmptyString(tx.recipient)
            && (this._isNonEmptyString(tx.description)
                || (typeof tx.amount === 'number' && Number.isFinite(tx.amount) && tx.amount > 0)
                || (tx.metadata && typeof tx.metadata === 'object'));
    }

    verifyTransaction(transaction) {
        const tx = { ...transaction };
        tx.type = this._normalizeType(tx);

        if (!this._isNonEmptyString(tx.transactionId)) {
            return false;
        }

        if (tx.type === 'system_event') {
            return this._isSystemEventValid(tx);
        }

        if (tx.type === 'medical_event') {
            if (!this._isMedicalEventValid(tx)) {
                return false;
            }

            if (this.acceptUnsignedMedicalEvents && !tx.signature) {
                return true;
            }
        }

        if (tx.type === 'signed_event' && !this._isSignedEventValid(tx)) {
            return false;
        }

        if (!this._isNonEmptyString(tx.publicKey) || !this._isNonEmptyString(tx.signature)) {
            return false;
        }

        try {
            const publicKey = crypto.createPublicKey({
                key: Buffer.from(tx.publicKey, 'base64'),
                format: 'der',
                type: 'spki'
            });

            const derivedIdentity = this.getIdentityFromPublicKey(tx.publicKey);
            if (tx.sender !== derivedIdentity && tx.sender !== tx.publicKey) {
                return false;
            }

            const txHash = this.calculateTransactionHash(tx);
            return crypto.verify(null, Buffer.from(txHash), publicKey, Buffer.from(tx.signature, 'base64'));
        } catch (error) {
            return false;
        }
    }

    transactionExists(transactionId) {
        const existsInChain = this.chain.some((block) => block.transactions.some((tx) => tx.transactionId === transactionId));
        if (existsInChain) {
            return true;
        }

        return this.pendingTransactions.some((tx) => tx.transactionId === transactionId);
    }

    addTransactionToPendingTransactions(transactionObj) {
        const normalized = this.normalizeTransactionPayload(transactionObj);

        if (!this.verifyTransaction(normalized)) {
            throw new Error('Invalid event signature or payload.');
        }

        if (this.transactionExists(normalized.transactionId)) {
            throw new Error('Duplicate transaction detected.');
        }

        this.pendingTransactions.push(normalized);
        this._persistState();
        return this.getLastBlock().index + 1;
    }

    calculateMerkleRoot(transactions) {
        if (!Array.isArray(transactions) || transactions.length === 0) {
            return sha256Hex('EMPTY');
        }

        let level = transactions.map((tx) => this.calculateTransactionHash(tx));

        while (level.length > 1) {
            const nextLevel = [];
            for (let i = 0; i < level.length; i += 2) {
                const left = level[i];
                const right = level[i + 1] || left;
                nextLevel.push(sha256Hex(left + right));
            }
            level = nextLevel;
        }

        return level[0];
    }

    prepareNextBlockData(timestamp = Date.now()) {
        const transactions = this.pendingTransactions.slice();
        return {
            index: this.getLastBlock().index + 1,
            timestamp,
            transactions,
            difficulty: this.currentDifficulty,
            merkleRoot: this.calculateMerkleRoot(transactions)
        };
    }

    hashBlock(previousBlockHash, currentBlockData, nonce) {
        const canonicalData = {
            index: currentBlockData.index,
            timestamp: currentBlockData.timestamp,
            transactions: currentBlockData.transactions,
            difficulty: currentBlockData.difficulty,
            merkleRoot: currentBlockData.merkleRoot || this.calculateMerkleRoot(currentBlockData.transactions || [])
        };

        const payload = {
            previousBlockHash,
            nonce,
            blockData: canonicalData
        };

        return sha256Hex(canonicalStringify(payload));
    }

    proofOfWork(previousBlockHash, currentBlockData, difficulty = currentBlockData.difficulty || this.currentDifficulty) {
        let nonce = 0;
        let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        const targetPrefix = '0'.repeat(Math.max(1, difficulty));

        while (!hash.startsWith(targetPrefix)) {
            nonce += 1;
            hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        }

        return nonce;
    }

    _removePendingTransactionsById(transactionIds) {
        const lookup = new Set(transactionIds);
        this.pendingTransactions = this.pendingTransactions.filter((tx) => !lookup.has(tx.transactionId));
    }

    _recalculateDifficulty() {
        const adjustmentInterval = 10;

        if (this.chain.length <= adjustmentInterval) {
            this.currentDifficulty = this.defaultDifficulty;
            return;
        }

        const latestBlock = this.getLastBlock();
        if ((latestBlock.index - 1) % adjustmentInterval !== 0) {
            this.currentDifficulty = Math.max(2, latestBlock.difficulty || this.currentDifficulty);
            return;
        }

        const previousAdjustmentBlock = this.chain[this.chain.length - 1 - adjustmentInterval];
        const actualTime = latestBlock.timestamp - previousAdjustmentBlock.timestamp;
        const expectedTime = this.targetBlockTimeMs * adjustmentInterval;

        let nextDifficulty = latestBlock.difficulty || this.currentDifficulty;
        if (actualTime < expectedTime / 2) {
            nextDifficulty += 1;
        } else if (actualTime > expectedTime * 2) {
            nextDifficulty -= 1;
        }

        this.currentDifficulty = Math.max(2, nextDifficulty);
    }

    createNewBlock(nonce, previousBlockHash, hash, options = {}) {
        const blockData = options.blockData || this.prepareNextBlockData(options.timestamp || Date.now());

        const newBlock = {
            index: blockData.index,
            timestamp: blockData.timestamp,
            transactions: blockData.transactions,
            nonce,
            hash,
            previousBlockHash,
            difficulty: blockData.difficulty,
            merkleRoot: blockData.merkleRoot,
            minedBy: options.minedBy || null,
            version: STATE_VERSION
        };

        const previousBlock = this.getLastBlock();
        if (!this._isBlockValid(newBlock, previousBlock)) {
            throw new Error('New block is invalid and cannot be added to chain.');
        }

        this.chain.push(newBlock);
        this._removePendingTransactionsById(newBlock.transactions.map((tx) => tx.transactionId));
        this._recalculateDifficulty();
        this._persistState();
        return newBlock;
    }

    _isGenesisBlockValid(genesisBlock) {
        return genesisBlock
            && genesisBlock.index === 1
            && genesisBlock.nonce === GENESIS_NONCE
            && genesisBlock.hash === GENESIS_HASH
            && genesisBlock.previousBlockHash === GENESIS_PREVIOUS_HASH
            && Array.isArray(genesisBlock.transactions)
            && genesisBlock.transactions.length === 0;
    }

    _isBlockValid(block, previousBlock) {
        if (!block || !previousBlock) {
            return false;
        }

        if (block.index !== previousBlock.index + 1) {
            return false;
        }

        if (block.previousBlockHash !== previousBlock.hash) {
            return false;
        }

        if (!Array.isArray(block.transactions)) {
            return false;
        }

        if (!block.transactions.every((tx) => this.verifyTransaction(tx))) {
            return false;
        }

        const expectedMerkleRoot = this.calculateMerkleRoot(block.transactions);
        if (block.merkleRoot !== expectedMerkleRoot) {
            return false;
        }

        const blockData = {
            index: block.index,
            timestamp: block.timestamp,
            transactions: block.transactions,
            difficulty: block.difficulty,
            merkleRoot: block.merkleRoot
        };

        const expectedHash = this.hashBlock(block.previousBlockHash, blockData, block.nonce);
        if (expectedHash !== block.hash) {
            return false;
        }

        const difficulty = Math.max(1, Number(block.difficulty || this.defaultDifficulty));
        if (!block.hash.startsWith('0'.repeat(difficulty))) {
            return false;
        }

        return true;
    }

    chainIsValid(chain) {
        if (!Array.isArray(chain) || chain.length === 0) {
            return false;
        }

        if (!this._isGenesisBlockValid(chain[0])) {
            return false;
        }

        for (let i = 1; i < chain.length; i += 1) {
            const currentBlock = chain[i];
            const previousBlock = chain[i - 1];

            if (!this._isBlockValid(currentBlock, previousBlock)) {
                return false;
            }
        }

        return true;
    }

    acceptIncomingBlock(newBlock) {
        const lastBlock = this.getLastBlock();
        if (!this._isBlockValid(newBlock, lastBlock)) {
            return false;
        }

        this.chain.push(newBlock);
        this._removePendingTransactionsById(newBlock.transactions.map((tx) => tx.transactionId));
        this.currentDifficulty = Math.max(2, Number(newBlock.difficulty || this.currentDifficulty));
        this._persistState();
        return true;
    }

    replaceChain(newChain, newPendingTransactions = []) {
        if (!this.chainIsValid(newChain)) {
            return false;
        }

        this.chain = newChain;
        this.pendingTransactions = Array.isArray(newPendingTransactions)
            ? newPendingTransactions.filter((tx) => this.verifyTransaction(tx))
            : [];
        this.currentDifficulty = Math.max(2, Number(this.getLastBlock().difficulty || this.defaultDifficulty));
        this._persistState();
        return true;
    }

    registerNode(newNodeUrl) {
        if (this.networkNodes.indexOf(newNodeUrl) === -1 && this.currentNodeUrl !== newNodeUrl) {
            this.networkNodes.push(newNodeUrl);
            this._persistState();
        }
    }

    registerNodesBulk(nodeUrls) {
        nodeUrls.forEach((url) => this.registerNode(url));
    }

    getBlock(blockHash) {
        let correctBlock = null;

        this.chain.forEach((block) => {
            if (block.hash === blockHash) {
                correctBlock = block;
            }
        });

        return correctBlock;
    }

    getTransaction(transactionId) {
        let correctTransaction = null;
        let correctBlock = null;

        this.chain.forEach((block) => {
            block.transactions.forEach((transaction) => {
                if (transaction.transactionId === transactionId) {
                    correctTransaction = transaction;
                    correctBlock = block;
                }
            });
        });

        return {
            transaction: correctTransaction,
            block: correctBlock
        };
    }

    getIdentityData(identity) {
        const identityTransactions = [];

        this.chain.forEach((block) => {
            block.transactions.forEach((transaction) => {
                if (transaction.recipient === identity || transaction.sender === identity) {
                    identityTransactions.push(transaction);
                }
            });
        });

        let cumulativeAmount = 0;
        identityTransactions.forEach((transaction) => {
            if (typeof transaction.amount !== 'number') {
                return;
            }

            if (transaction.recipient === identity) {
                cumulativeAmount += transaction.amount;
            } else if (transaction.sender === identity) {
                cumulativeAmount -= transaction.amount;
            }
        });

        return {
            identityTransactions,
            identityEventCount: identityTransactions.length,
            cumulativeAmount,
            // Backward compatibility for existing clients still expecting address keys.
            addressTransactions: identityTransactions,
            addressBalance: cumulativeAmount
        };
    }

    getAddressData(address) {
        return this.getIdentityData(address);
    }

    _blockWork(difficulty) {
        return BigInt(16) ** BigInt(Math.max(1, Number(difficulty || this.defaultDifficulty)));
    }

    getChainWork(chainInput = this.chain) {
        let work = 0n;
        chainInput.forEach((block, index) => {
            if (index === 0) {
                return;
            }
            work += this._blockWork(block.difficulty);
        });
        return work.toString();
    }

    getBlockchainSnapshot() {
        return {
            stateVersion: STATE_VERSION,
            currentNodeUrl: this.currentNodeUrl,
            chain: this.chain,
            pendingTransactions: this.pendingTransactions,
            networkNodes: this.networkNodes,
            currentDifficulty: this.currentDifficulty,
            chainWork: this.getChainWork()
        };
    }
}

module.exports = BlockchainLedger;
