require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { v1: uuid } = require('uuid');
const BlockchainLedger = require('../core/blockchain-ledger');

const app = express();
const nodeIdentity = uuid().split('-').join('');
const blockchain = new BlockchainLedger();
const port = Number(process.argv[2] || process.env.PORT || 3001);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.disable('x-powered-by');

const isValidUrl = function(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};

const normalizeUrl = function(url) {
    return new URL(url).href.replace(/\/$/, '');
};

const isNonEmptyString = function(value) {
    return typeof value === 'string' && value.trim().length > 0;
};

app.get('/health', function(req, res) {
    res.json({
        status: 'ok',
        node: blockchain.currentNodeUrl,
        nodeIdentity,
        difficulty: blockchain.currentDifficulty,
        chainLength: blockchain.chain.length,
        pendingTransactions: blockchain.pendingTransactions.length
    });
});

app.get('/blockchain', function(req, res) {
    res.json(blockchain.getBlockchainSnapshot());
});

app.get('/mempool', function(req, res) {
    res.json({ pendingTransactions: blockchain.pendingTransactions });
});

const createIdentityHandler = function(req, res) {
    const identity = blockchain.generateIdentityCredentials();
    res.json(identity);
};

app.get('/identity/new', createIdentityHandler);
app.get('/wallet/new', createIdentityHandler);

const signEventHandler = function(req, res) {
    try {
        const { transaction, privateKey, publicKey } = req.body || {};
        if (!transaction || !isNonEmptyString(privateKey) || !isNonEmptyString(publicKey)) {
            return res.status(400).json({ error: 'transaction, privateKey and publicKey are required.' });
        }

        const normalizedTransaction = blockchain.createNewTransaction({
            ...transaction,
            publicKey,
            sender: transaction.sender || blockchain.getIdentityFromPublicKey(publicKey)
        });

        const signedTransaction = blockchain.signEvent(normalizedTransaction, privateKey);
        return res.json({ transaction: signedTransaction });
    } catch (error) {
        return res.status(400).json({ error: 'Event signing failed.', detail: error.message });
    }
};

app.post('/identity/sign-event', signEventHandler);
app.post('/wallet/sign-transaction', signEventHandler);

const verifyEventHandler = function(req, res) {
    const transaction = req.body || {};
    const isValid = blockchain.verifyTransaction(transaction);
    res.json({ valid: isValid });
};

app.post('/event/verify', verifyEventHandler);
app.post('/transaction/verify', verifyEventHandler);

app.post('/transaction', function(req, res) {
    const newTransaction = req.body;

    if (typeof newTransaction !== 'object' || Array.isArray(newTransaction)) {
        return res.status(400).json({ error: 'Invalid transaction format' });
    }

    if (!isNonEmptyString(newTransaction.sender) || !isNonEmptyString(newTransaction.recipient)) {
        return res.status(400).json({ error: 'Transaction sender and recipient are required.' });
    }

    try {
        const blockIndex = blockchain.addTransactionToPendingTransactions(newTransaction);
        return res.json({ note: `Event will be added in block ${blockIndex}.` });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

app.post('/transaction/broadcast', async function(req, res) {
    const payload = req.body || {};
    const { sender, recipient, doctor, date, description, type } = payload;
    const hasMedicalFields = isNonEmptyString(doctor) && isNonEmptyString(date) && isNonEmptyString(description);
    const hasSignature = isNonEmptyString(payload.publicKey) && isNonEmptyString(payload.signature);
    const isSystemEvent = String(type || '').toLowerCase() === 'system_event';

    if (!isNonEmptyString(sender) || !isNonEmptyString(recipient)) {
        return res.status(400).json({ error: 'Invalid event data' });
    }

    if (!hasMedicalFields && !hasSignature && !isSystemEvent) {
        return res.status(400).json({ error: 'Event must include medical details, a valid signature, or be a system event.' });
    }

    const newTransaction = blockchain.createNewTransaction(payload);

    try {
        blockchain.addTransactionToPendingTransactions(newTransaction);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

    try {
        await Promise.all(
            blockchain.networkNodes.map(async (networkNodeUrl) => {
                const response = await fetch(`${normalizeUrl(networkNodeUrl)}/transaction`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newTransaction)
                });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
        );

        return res.json({ note: 'Event created and broadcast successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Event broadcast failed', detail: error.message });
    }
});

app.get('/mine', async function(req, res) {
    try {
        const systemEvent = blockchain.createNewTransaction({
            type: 'system_event',
            sender: 'SYSTEM',
            recipient: nodeIdentity,
            description: 'Node mined a new block',
            metadata: {
                node: blockchain.currentNodeUrl,
                minerIdentity: nodeIdentity
            }
        });

        blockchain.addTransactionToPendingTransactions(systemEvent);

        const lastBlock = blockchain.getLastBlock();
        const previousBlockHash = lastBlock.hash;
        const currentBlockData = blockchain.prepareNextBlockData();
        const nonce = blockchain.proofOfWork(previousBlockHash, currentBlockData, currentBlockData.difficulty);
        const blockHash = blockchain.hashBlock(previousBlockHash, currentBlockData, nonce);
        const newBlock = blockchain.createNewBlock(nonce, previousBlockHash, blockHash, {
            blockData: currentBlockData,
            minedBy: nodeIdentity
        });

        await Promise.all(
            blockchain.networkNodes.map(async (networkNodeUrl) => {
                const response = await fetch(`${normalizeUrl(networkNodeUrl)}/receive-new-block`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ newBlock })
                });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
        );

        return res.json({
            note: 'New block mined and broadcast successfully',
            block: newBlock
        });
    } catch (error) {
        return res.status(500).json({ error: 'Mining failed', detail: error.message });
    }
});

app.get('/consensus', async function(req, res) {
    try {
        const blockchains = await Promise.all(
            blockchain.networkNodes.map(async (networkNodeUrl) => {
                const response = await fetch(`${normalizeUrl(networkNodeUrl)}/blockchain`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
        );

        const localChainWork = BigInt(blockchain.getChainWork());
        let maxChainWork = localChainWork;
        let newLongestChain = null;
        let newPendingTransactions = null;

        blockchains.forEach((remoteBlockchain) => {
            if (!Array.isArray(remoteBlockchain.chain) || !blockchain.chainIsValid(remoteBlockchain.chain)) {
                return;
            }

            const remoteChainWork = BigInt(
                remoteBlockchain.chainWork || blockchain.getChainWork(remoteBlockchain.chain)
            );

            if (remoteChainWork > maxChainWork) {
                maxChainWork = remoteChainWork;
                newLongestChain = remoteBlockchain.chain;
                newPendingTransactions = remoteBlockchain.pendingTransactions;
            }
        });

        if (!newLongestChain) {
            return res.json({
                note: 'Current chain has not been replaced',
                chain: blockchain.chain
            });
        }

        const chainReplaced = blockchain.replaceChain(newLongestChain, newPendingTransactions);
        if (!chainReplaced) {
            return res.status(409).json({ note: 'Received chain is invalid and was not adopted.' });
        }

        return res.json({
            note: 'This chain has been replaced',
            chain: blockchain.chain
        });
    } catch (error) {
        return res.status(500).json({ error: 'Consensus check failed', detail: error.message });
    }
});

app.post('/receive-new-block', function(req, res) {
    const newBlock = req.body.newBlock;

    if (typeof newBlock !== 'object' || Array.isArray(newBlock)) {
        return res.status(400).json({ error: 'Invalid block format' });
    }

    if (blockchain.acceptIncomingBlock(newBlock)) {
        return res.json({ note: 'New block received and accepted.', newBlock });
    }

    return res.json({ note: 'New block rejected.', newBlock });
});

app.post('/register-and-broadcast-node', async function(req, res) {
    const newNodeUrl = req.body.newNodeUrl;

    if (!isNonEmptyString(newNodeUrl) || !isValidUrl(newNodeUrl)) {
        return res.status(400).json({ error: 'Invalid node URL' });
    }

    const normalizedNodeUrl = normalizeUrl(newNodeUrl);

    blockchain.registerNode(normalizedNodeUrl);

    try {
        await Promise.all(
            blockchain.networkNodes.map(async (networkNodeUrl) => {
                const response = await fetch(`${networkNodeUrl}/register-node`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ newNodeUrl: normalizedNodeUrl })
                });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
        );

        const bulkResponse = await fetch(`${normalizedNodeUrl}/register-nodes-bulk`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ allNetworkNodes: [...blockchain.networkNodes, blockchain.currentNodeUrl] })
        });
        if (!bulkResponse.ok) throw new Error(`HTTP error! status: ${bulkResponse.status}`);
        await bulkResponse.json();

        return res.json({ note: 'New node registered successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Node registration failed', detail: error.message });
    }
});

app.post('/register-node', function(req, res) {
    const newNodeUrl = req.body.newNodeUrl;

    if (!isNonEmptyString(newNodeUrl) || !isValidUrl(newNodeUrl)) {
        return res.status(400).json({ error: 'Invalid node URL' });
    }

    const normalizedNodeUrl = normalizeUrl(newNodeUrl);
    blockchain.registerNode(normalizedNodeUrl);

    return res.json({ note: 'New node registered successfully.' });
});

app.post('/register-nodes-bulk', function(req, res) {
    const allNetworkNodes = req.body.allNetworkNodes;

    if (!Array.isArray(allNetworkNodes)) {
        return res.status(400).json({ error: 'Invalid nodes list' });
    }

    allNetworkNodes.forEach((networkNodeUrl) => {
        if (!isValidUrl(networkNodeUrl)) {
            return;
        }

        const normalizedNodeUrl = normalizeUrl(networkNodeUrl);
        blockchain.registerNode(normalizedNodeUrl);
    });

    return res.json({ note: 'Bulk registration successful' });
});

app.get('/block/:blockHash', function(req, res) {
    const blockHash = req.params.blockHash;
    const correctBlock = blockchain.getBlock(blockHash);
    res.json({ block: correctBlock });
});

app.get('/transaction/:transactionID', function(req, res) {
    const transactionID = req.params.transactionID;
    const transactionData = blockchain.getTransaction(transactionID);
    res.json({
        transaction: transactionData.transaction,
        block: transactionData.block
    });
});

app.get('/address/:address', function(req, res) {
    const address = req.params.address;
    const addressData = blockchain.getIdentityData(address);
    res.json({ addressData });
});

app.get('/identity/:identity', function(req, res) {
    const identity = req.params.identity;
    const identityData = blockchain.getIdentityData(identity);
    res.json({ identityData });
});

function startServer() {
    return app.listen(port, function() {
        console.log(`Listening on port ${port}...`);
    });
}

if (require.main === module) {
    startServer();
}

module.exports = { app, startServer, blockchain };
