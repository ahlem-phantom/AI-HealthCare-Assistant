var mongoose = require("mongoose");
var Schema= mongoose.Schema;

var Appointement= new Schema(
    {
        Firstname:String,
        Lastname:String,
        Email:String,
        Phone:String,
        StartDate:Date,
        EndDate:Date,
        DoctorName:String,
        User : {
            type: mongoose.Schema.Types.ObjectId, 
            ref : "User" ,
          },  
    }
)

const AppointementSchema = mongoose.model("appointments",Appointement)
module.exports=AppointementSchema;