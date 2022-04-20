// import { getRecords } from '../controllers/Record.js';
// import Record from '../models/Record.js';
const Record = require('../models/Record.js');
const RecordController = require('../controllers/Record')
var express = require('express');
var router = express.Router();



router.post('/', RecordController.record_Create_Post);
router.get('/get', function(req, res) {
    try {
        const records = Record.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
router.put("/:id", RecordController.record_update);
router.get("/:id", RecordController.record_details);
router.get("/", RecordController.record_list);
router.delete("/:id", RecordController.record_delete);






module.exports = router;