const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type: String,
    },
    items: [
        {
            productId: {
                type: String,
                ref: "item",
            },
            name: String,
            quantity: {
                type: Number,
                required: true,
                min: [1, "Quantity can not be less then 1."],
            },
            price: Number,
        },
    ],
    shippingInfo: {
        name: String,
        address: String,
        contact: String,
        required: true,
    },
    bill: {
        type: Number,
        required: true,
    },
    date_added: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        required: true,
    },
});

module.exports = Order = mongoose.model("order", OrderSchema);
