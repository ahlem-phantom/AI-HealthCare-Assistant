const BlockchainLedger = require('../core/blockchain-ledger');

const blockchain = new BlockchainLedger({
    currentNodeUrl: 'http://localhost:3001',
    disablePersistence: true
});

const identityA = blockchain.generateIdentityCredentials();
const identityB = blockchain.generateIdentityCredentials();

const signedEvent = blockchain.createNewTransaction({
    type: 'signed_event',
    sender: identityA.identity,
    recipient: identityB.identity,
    description: 'Authorized handoff of clinical record pointer',
    metadata: {
        scope: 'record_access'
    },
    publicKey: identityA.publicKey
});

const signedPayload = blockchain.signEvent(signedEvent, identityA.privateKey);
blockchain.addTransactionToPendingTransactions(signedPayload);

const medicalEvent = blockchain.createNewTransaction({
    type: 'medical_event',
    sender: 'patient-demo-id',
    recipient: 'doctor-demo-id',
    doctor: 'Dr. Ledger',
    date: new Date().toISOString(),
    description: 'Follow-up after surgery'
});
blockchain.addTransactionToPendingTransactions(medicalEvent);

const systemEvent = blockchain.createNewTransaction({
    type: 'system_event',
    sender: 'SYSTEM',
    recipient: identityA.identity,
    description: 'Block notarized by node',
    metadata: {
        reason: 'mining'
    }
});
blockchain.addTransactionToPendingTransactions(systemEvent);

const previousBlockHash = blockchain.getLastBlock().hash;
const currentBlockData = blockchain.prepareNextBlockData();
const nonce = blockchain.proofOfWork(previousBlockHash, currentBlockData, currentBlockData.difficulty);
const blockHash = blockchain.hashBlock(previousBlockHash, currentBlockData, nonce);
blockchain.createNewBlock(nonce, previousBlockHash, blockHash, { blockData: currentBlockData, minedBy: identityA.identity });

console.log('Chain valid:', blockchain.chainIsValid(blockchain.chain));
console.log('Chain length:', blockchain.chain.length);
console.log('Pending events:', blockchain.pendingTransactions.length);
console.log('Chain work:', blockchain.getChainWork());
console.log('Identity A events:', blockchain.getIdentityData(identityA.identity).identityEventCount);
