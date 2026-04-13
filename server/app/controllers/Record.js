// import record from '.. /models/Record.js';
const Record = require('../models/Record.js');
const axios = require('axios');
const BLOCKCHAIN_API_URL = process.env.BLOCKCHAIN_NODE_URL || 'http://localhost:3001';

//add record
const record_Create_Post = async(req, res) => {
        var rec = new Record(req.body);
        try {
            const records = await Record.create(rec);
            res.status(201).json({ Record: records });
        } catch (error) {
            console.log(error)
            const errors = handleError(err);
            res.status(404).json({ errors });

        }
    }
    //update record
const record_update = async(req, res) => {
    const id = req.params.id;
    const updateData = req.body.record || req.body;
    const record = await Record.findOneAndUpdate({ "userid": { _id: id } }, { $set: updateData }, { new: true });
    
    if (req.body.blockchainData) {
        try {
            await axios.post(`${BLOCKCHAIN_API_URL}/transaction/broadcast`, req.body.blockchainData);
            await axios.get(`${BLOCKCHAIN_API_URL}/mine`);
        } catch (err) {
            console.error("Blockchain error:", err.message);
        }
    }
    
    res.json(record)
}

//delete record
const record_delete = (req, res) => {
    const id = req.params.id;

    Record
        .findByIdAndDelete(id)
        .then((result) => {
            res.json();
        })
        .catch((err) => {
            console.log(err);
        });
};


// const record_details = async(req, res) => {
//     const id = req.params.id;
//     const record = await Record.findById(id).then((result) => {
//         res.json(result);
//     }).catch((err) => {
//         console.log(err)
//     })
// };
const record_details = async(req, res) => {
    const id = req.params.id;
    const record = await Record.find({ "userid": { _id: id } }).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
};

const record_list = (req, res) => {
    Record.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
};


module.exports = {
    record_Create_Post,
    record_delete,
    record_update,
    record_details,
    record_list
}