const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: String,
    },
    items: [
        {
            image: String,
            productId: {
                type: String,
            },
            optionId: {
                type: String,
            },
            name: String,
            volume: String,
            quantity: {
                type: Number,
                required: true,
                min: [1, "Quantity can not be less then 1."],
                deafult: 1,
            },
            price: Number,
        },
    ],
    bill: {
        type: Number,
        required: true,
        default: 0,
    },
});

module.exports = Cart = mongoose.model("cart", CartSchema);
