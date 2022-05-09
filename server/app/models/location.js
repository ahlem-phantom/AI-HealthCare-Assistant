var mongoose = require("mongoose");
var Schema= mongoose.Schema;

var Location= new Schema(
    {
        lat : String,
        lng :String
    }
)

const LocationSchema = mongoose.model("location",Location)
module.exports=LocationSchema;