const mongoose = require("mongoose");
const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: String,
        description: String,
        price: Number,
        countInStock: Number,
        imageUrl: String,
    }, )
);

module.exports = Product;