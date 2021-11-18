const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    ID: {
        type: Number,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    Brand: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Image: String,
    Price_range: {
        type: String,
        required: true,
    },
    Option: [],
});

module.exports = Product = mongoose.model("Product", productSchema);
