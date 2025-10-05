const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./Blockchain');
const { v1: uuid } = require('uuid');
const rp = require('request-promise');
var cors = require('cors');
const helmet = require('helmet'); // Added Helmet middleware

const nodeAdress = uuid().split('-').join('');
const bitcoin = new Blockchain();
const port = process.argv[2];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(helmet()); // Disable the X-Powered-By header

app.get('/blockchain', function(req, res) {
    res.send(bitcoin);
})

app.post('/transaction', function(req, res) {
    const newTransaction = req.body;
    if (typeof newTransaction !== 'object' || Array.isArray(newTransaction)) { // Check type
        return res.status(400).json({ error: 'Invalid transaction format' });
    }
    const blockIndex = bitcoin.addTransactionToPendingTransactions(newTransaction);
    res.json({ note: `Transaction will be added in block ${blockIndex}.` })
})

app.post('/transaction/broadcast', function(req, res) {
    const { sender, recipient, doctor, date, description } = req.body;
    if (typeof sender !== 'string' || typeof recipient !== 'string' || typeof doctor !== 'string' || typeof date !== 'string' || typeof description !== 'string') {
        return res.status(400).json({ error: 'Invalid transaction data' });
    }
    const newTransaction = bitcoin.createNewTransaction(sender, recipient, doctor, date, description);
    bitcoin.addTransactionToPendingTransactions(newTransaction);
    const requestPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const sanitizedUrl = new URL(networkNodeUrl); // Sanitize URL
        const requestOptions = {
            uri: sanitizedUrl.href + '/transaction',
            method: 'POST',
            body: newTransaction,
            json: true
        }
        requestPromises.push(rp(requestOptions));
    });
    Promise.all(requestPromises).then(data => {
        res.json({ note: 'Transaction created and broadcast successfully' })
    })
});

app.get('/mine', function(req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1,
    }
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

    const requestPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const sanitizedUrl = new URL(networkNodeUrl); // Sanitize URL
        const requestOptions = {
            uri: sanitizedUrl.href + '/receive-new-block',
            method: 'POST',
            body: { newBlock: newBlock },
            json: true
        }
        requestPromises.push(rp(requestOptions));

    })
    Promise.all(requestPromises).then(data => {
            const requestOptions = {
                uri: bitcoin.currentNodeUrl + '/transaction/broadcast',
                method: 'POST',
                body: {
                    amount: 12.5,
                    sender: "00",
                    recipient: nodeAdress
                },
                json: true
            }
            return rp(requestOptions);
        })
        .then(data => {
            res.json({
                note: "New block mined and broadcast successfully",
                block: newBlock
            })
        })

});

app.get('/consensus', function(req, res) {
    const requestPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const sanitizedUrl = new URL(networkNodeUrl); // Sanitize URL
        const requestOptions = {
            uri: sanitizedUrl.href + '/blockchain',
            method: 'GET',
            json: true
        }
        requestPromises.push(rp(requestOptions));
    });
    Promise.all(requestPromises)
        .then(blockchains => {
            const currentChainLength = bitcoin.chain.length;
            let maxChainLength = currentChainLength;
            let newLongestChain = null;
            let newPendingTransactions = null;
            blockchains.forEach(blockchain => {
                if (blockchain.chain.length > maxChainLength) {
                    maxChainLength = blockchain.chain.length;
                    newLongestChain = blockchain.chain;
                    newPendingTransactions = blockchain.pendingTransactions;
                }
            })
            if (!newLongestChain || (newLongestChain && !bitcoin.chainIsValid(newLongestChain))) {
                res.json({
                    note: 'Current chain has not been replaced',
                    chain: bitcoin.chain
                })
            } else {
                bitcoin.chain = newLongestChain;
                bitcoin.pendingTransactions = newPendingTransactions;
                res.json({
                    note: 'This chain has been replaced',
                    chain: bitcoin.chain
                })
            }
        });
});

app.post('/receive-new-block', function(req, res) {
    const newBlock = req.body.newBlock;
    if (typeof newBlock !== 'object' || Array.isArray(newBlock)) { // Check type
        return res.status(400).json({ error: 'Invalid block format' });
    }
    const lastBlock = bitcoin.getLastBlock();
    const correctHash = lastBlock.hash === newBlock.previousBlockHash;
    const correctIndex = lastBlock['index'] + 1 === newBlock['index'];
    if (correctHash && correctIndex) {
        bitcoin.chain.push(newBlock);
        bitcoin.pendingTransactions = [];
        res.json({
            note: 'New block received and accepted.',
            newBlock: newBlock

        });

    } else {
        res.json({
            note: 'New block rejected.',
            newBlock: newBlock
        })
    }
})

//register node and broadcast that node to the network
app.post('/register-and-broadcast-node', function(req, res) {
    const newNodeUrl = req.body.newNodeUrl;
    if (typeof newNodeUrl !== 'string') { // Check type
        return res.status(400).json({ error: 'Invalid node URL' });
    }

    if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1) bitcoin.networkNodes.push(newNodeUrl); // Corrected indexOf check
    const registerNodesPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const sanitizedUrl = new URL(networkNodeUrl); // Sanitize URL
        const requestOptions = {
            uri: sanitizedUrl.href + '/register-node',
            method: 'POST',
            body: { newNodeUrl: newNodeUrl },
            json: true
        }
        registerNodesPromises.push(rp(requestOptions));
    })
    Promise.all(registerNodesPromises)
        .then(data => {
            const buldRegisterOptions = {
                uri: newNodeUrl + '/register-nodes-bulk',
                method: 'POST',
                body: { allNetworkNodes: [...bitcoin.networkNodes, bitcoin.currentNodeUrl] },
                json: true
            }
            return rp(buldRegisterOptions);
        }).then(data => {
            res.json({ note: 'New node registered successfully' });
        });
});

//register a node with the network
app.post('/register-node', function(req, res) {
    const newNodeUrl = req.body.newNodeUrl;
    if (typeof newNodeUrl !== 'string') { // Check type
        return res.status(400).json({ error: 'Invalid node URL' });
    }
    const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(newNodeUrl) == -1;
    const notCurrentNode = bitcoin.currentNodeUrl != newNodeUrl;
    if (nodeNotAlreadyPresent && notCurrentNode) bitcoin.networkNodes.push(newNodeUrl);
    res.json({ note: 'New node registered successfully.' })

})

//register multiple nodes at once
app.post('/register-nodes-bulk', function(req, res) {
    const allNetworkNodes = req.body.allNetworkNodes;
    if (!Array.isArray(allNetworkNodes)) { // Check type
        return res.status(400).json({ error: 'Invalid nodes list' });
    }
    allNetworkNodes.forEach(networkNodeUrl => {
        const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(networkNodeUrl) == -1;
        const notCurrentNode = bitcoin.currentNodeUrl !== networkNodeUrl
        if (nodeNotAlreadyPresent && notCurrentNode) bitcoin.networkNodes.push(networkNodeUrl)
    });
    res.json({ note: 'Bulk registration successful' })
})

app.get('/block/:blockHash', function(req, res) {
    const blockHash = req.params.blockHash;
    const correctBlock = bitcoin.getBlock(blockHash);
    res.json({ block: correctBlock });
});

app.get('/transaction/:transactionID', function(req, res) {
    const transactionID = req.params.transactionID;
    const transactionData = bitcoin.getTransaction(transactionID);
    res.json({
        Transaction: transactionData.transaction,
        block: transactionData.block
    })
});

app.get('/address/:address', function(req, res) {
    const address = req.params.address;
    const addressData = bitcoin.getAddressData(address);
    res.json({ addressData: addressData });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}...`)
});
//7   vd:9 min:0