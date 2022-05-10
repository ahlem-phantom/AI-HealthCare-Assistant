const Blockchain = require('./Blockchain');

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2389, '12eza1e3aze486n', '54z564azeaz4e6')
// bitcoin.createNewBlock(111, '1z1aezea2eza1e3aze486n', 'zeaeazea4145az')
// bitcoin.createNewBlock(2899, 'e56az4e6az', '456za4e56aze456')

// bitcoin.createNewBlock(789497, '4zeazeae8970a', '45zaeze5a1aze02')

// bitcoin.createNewTransaction(200, 'alexeaz25a', 'jennea5z4896');

// bitcoin.createNewBlock(9997874, 'eaeaze056', 'rfzez5220z5e')

// bitcoin.createNewTransaction(50, 'alexeaz25a', 'jennea5z4896');
// bitcoin.createNewTransaction(300, 'alexeaz25a', 'jennea5z4896');
// bitcoin.createNewTransaction(2000, 'alexeaz25a', 'jennea5z4896');

// bitcoin.createNewBlock(11858878, 'rrrraezea0za', 'aazazeaz0e32');


// const previousBlockHash = '4458574za57za4a5';
// const currentBlockData = [{
//         amount: 20,
//         sender: '5za64ea8ze76',
//         recipient: '45e6za4e8aze4a6'
//     },
//     {
//         amount: 30,
//         sender: '5za64ea8ze76',
//         recipient: '45e6za4e8aze4a6'
//     },
//     {
//         amount: 40,
//         sender: '5za64ea8ze76',
//         recipient: '45e6za4e8aze4a6'
//     }
// ];
// console.log(bitcoin);
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 57183));

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// console.log(bitcoin.chain[2]);
const bc1 = {
    "chain": [{
            "index": 1,
            "timestamp": 1650849607401,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1650849645065,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1650849994970,
            "transactions": [{
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "d7c58680c43511ec9d92cde15c6c5ab6",
                    "transactionId": "ee5ac680c43511ec9d92cde15c6c5ab6"
                },
                {
                    "amount": 10,
                    "sender": "mario",
                    "recipient": "martin",
                    "transactionId": "b032f390c43611ec9d92cde15c6c5ab6"
                },
                {
                    "amount": 20,
                    "sender": "mario",
                    "recipient": "martin",
                    "transactionId": "b54133b0c43611ec9d92cde15c6c5ab6"
                },
                {
                    "amount": 30,
                    "sender": "mario",
                    "recipient": "martin",
                    "transactionId": "b986f3b0c43611ec9d92cde15c6c5ab6"
                }
            ],
            "nonce": 64067,
            "hash": "0000d107a981848d0c41ce222620b7be96dd59f9e01f4d652a937e2f38f91596",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1650850041271,
            "transactions": [{
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "d7c58680c43511ec9d92cde15c6c5ab6",
                    "transactionId": "bec851c0c43611ec9d92cde15c6c5ab6"
                },
                {
                    "amount": 40,
                    "sender": "mario",
                    "recipient": "martin",
                    "transactionId": "ce086ee0c43611ec9d92cde15c6c5ab6"
                },
                {
                    "amount": 50,
                    "sender": "mario",
                    "recipient": "martin",
                    "transactionId": "cfd0f9e0c43611ec9d92cde15c6c5ab6"
                },
                {
                    "amount": 60,
                    "sender": "mario",
                    "recipient": "martin",
                    "transactionId": "d1c41750c43611ec9d92cde15c6c5ab6"
                },
                {
                    "amount": 70,
                    "sender": "mario",
                    "recipient": "martin",
                    "transactionId": "d3eb1600c43611ec9d92cde15c6c5ab6"
                }
            ],
            "nonce": 118063,
            "hash": "000079f926065ec5f8b7951b4b6fe7adeff819890089a961e42a16c95a9f4324",
            "previousBlockHash": "0000d107a981848d0c41ce222620b7be96dd59f9e01f4d652a937e2f38f91596"
        },
        {
            "index": 5,
            "timestamp": 1650850058503,
            "transactions": [{
                "amount": 12.5,
                "sender": "00",
                "recipient": "d7c58680c43511ec9d92cde15c6c5ab6",
                "transactionId": "da6198b0c43611ec9d92cde15c6c5ab6"
            }],
            "nonce": 73687,
            "hash": "00006d7be39e4c9b9aa7326c30590dfd57585e16d0ed81b98dbd646f91957bac",
            "previousBlockHash": "000079f926065ec5f8b7951b4b6fe7adeff819890089a961e42a16c95a9f4324"
        },
        {
            "index": 6,
            "timestamp": 1650850060717,
            "transactions": [{
                "amount": 12.5,
                "sender": "00",
                "recipient": "d7c58680c43511ec9d92cde15c6c5ab6",
                "transactionId": "e4a6af90c43611ec9d92cde15c6c5ab6"
            }],
            "nonce": 70368,
            "hash": "00005a927286db392dc3d58076799aabee1e9db651faf7787c30ad20121bcfd7",
            "previousBlockHash": "00006d7be39e4c9b9aa7326c30590dfd57585e16d0ed81b98dbd646f91957bac"
        }
    ],
    "pendingTransactions": [{
        "amount": 12.5,
        "sender": "00",
        "recipient": "d7c58680c43511ec9d92cde15c6c5ab6",
        "transactionId": "e5f883f0c43611ec9d92cde15c6c5ab6"
    }],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
}
console.log('Valid', bitcoin.chainIsValid(bc1.chain));