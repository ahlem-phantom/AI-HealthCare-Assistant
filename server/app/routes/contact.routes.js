let mongoose = require('mongoose'),
request = require('request'),
  express = require('express'),
  router = express.Router();
//  Contact Model
let contactSchema = require('../models/contact.model');
// CREATE Contact
router.route('/create-contact').post((req, res, next) => {
    contactSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

module.exports = router;