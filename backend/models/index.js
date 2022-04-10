const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.doctor = require("./doctor.model");
db.patient = require("./patient.model");
db.user = require("./user.model");

module.exports = db;