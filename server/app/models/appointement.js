var mongoose = require("mongoose");
var Schema= mongoose.Schema;

var Appointement= new Schema(
    {
        Title:String,
        StartDate:Date,
        EndDate:Date,
        UserId:String
    }
)

const AppointementSchema = mongoose.model("appointments",Appointement)
module.exports=AppointementSchema;