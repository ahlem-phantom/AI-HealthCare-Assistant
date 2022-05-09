const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    firstname: String,
    lastname:String,
    email: String,
    password: String,
    birthdate: Date,
    gender : {
      type: String, 
      enum: ['Male', 'Female', 'none'],
    },
    phone: String,
    country: String,
    stat: String,
    street: String,
    zip: String,
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
    status: {
      type: String, 
      enum: ['Pending', 'Active', 'Inactive'],
      default: 'Pending'
    },
    role: {
      type: String, 
      enum: ['doctor', 'patient', 'admin'],
    },
    confirmationCode: { 
      type: String, 
      unique: true },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
