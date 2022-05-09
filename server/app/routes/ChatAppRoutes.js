var express = require('express');
const ChatAppController = require("../controllers/chatapp.controller");

var router = express.Router();

    router.post('/send/:id', ChatAppController.send_message );
    router.get('/get/:id',ChatAppController.get_messages );
    router.delete("/delete/:id", ChatAppController.delete_messages);

module.exports = router;