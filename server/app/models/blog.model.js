const mongoose = require("mongoose");
const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({
    title: String,
    description: String,
    views: Number,
    likes:  Number,
    picture: String,
    category: String,
    dateCreation : {
        type: Date,
        default: Date.now
      },
    doctors: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ]
  })
);
module.exports = Blog;