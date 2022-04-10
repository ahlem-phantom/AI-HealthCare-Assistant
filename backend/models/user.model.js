const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    birthdate: Date,
    phone: String,
    country: String,
    stat: String,
    street: String,
    zip: String,
    password: String,
    isActive: {
        type : Boolean,
        default: true
    },
    creationDate: Date,
    paymentDate: Date,
    paymentPlan: String,
    isExpired: {
        type : Boolean,
        default: false
    },
    isPaid: {
        type : Boolean,
        default: true
    },
    picture : String,
    role:{
        type : String ,
        enum : ['ADMIN','PATIENT','DOCTOR'],
    },
  })
);
module.exports = User;