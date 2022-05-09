var mongoose = require("mongoose");
var Schema= mongoose.Schema;

var chatbotTalks= new Schema(
    {
        messageSent:String,
        messageReceived:String,
        date:Date,
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        nearestdoctor: String
    }
)

const chatbotTalksSchema = mongoose.model("chatbotTalks",chatbotTalks)
module.exports=chatbotTalksSchema;