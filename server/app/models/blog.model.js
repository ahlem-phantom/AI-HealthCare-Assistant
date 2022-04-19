const mongoose = require("mongoose");
const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({
    title: String,
    description: String,
    views: Number,
    likes:  Number,
    picture: String,
    dateCreation : {
        type: Date,
        default: Date.now
      }
  })
);
module.exports = Blog;