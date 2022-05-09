const mongoose = require("mongoose");
const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name : String,
    phone : String,
    email : String,
    message : String,
   
  })
);
module.exports = Contact;