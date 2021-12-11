const c = require("config");
const Cart = require("../models/cart.js");
const Item = require("../models/item.js");

module.exports.get_cart_items = async (req, res) => {
    const userId = req.params.id;
    try {
        let cart = await Cart.findOne({ userId });
        if (cart && cart.items.length > 0) {
            res.send(cart);
        } else {
            res.send(null);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

module.exports.add_cart_item = async (req, res) => {
    const userId = req.params.id;
    const { productId, optionId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });
        let item = await Item.findOne({ _id: productId });
        if (!item) {
            res.status(404).send("Item not found!");
        }
        let price;
        let volume;
        item.Option.every((option) => {
            if (option.OptionID == optionId) {
                price = option.Price;
                volume = option.Volume;
                return false;
            }
            else
                return true;
        });
        price = Number(price.replace(/[^0-9]+/g, ""));
        const name = item.Name;
        const image = item.Image;

        if (cart) {
            // if cart exists for the user
            let itemIndex = cart.items.findIndex(
                (p) => p.productId == productId
            );
            
            let itemOption = cart.items.findIndex(
                (p) => p.optionId == optionId
            )

            // Check if product exists or not
            if (itemIndex > -1) {
                // Check if the same item option
                if (itemOption > -1){
                    let productItem = cart.items[itemOption];
                    productItem.quantity += quantity;
                    cart.items[itemOption] = productItem;
                } 
                // Same product but different item option
                else { 
                    cart.items.push({ image, productId, optionId, name, volume, quantity, price });
                }
            } else {
                cart.items.push({ image, productId, optionId, name, volume, quantity, price });
            }
            cart.bill += quantity * price;
            cart = await cart.save();
            return res.status(201).send(cart);
        } else {
            // no cart exists, create one
            const newCart = await Cart.create({
                userId : userId,
                items: [{ image, productId, optionId, name, volume, quantity, price }],
                bill: quantity * price,
            });
            return res.status(201).send(newCart);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

module.exports.update_cart_item = async (req, res) => {
    const userId = req.params.id;
    const { productId, optionId, qty } = req.body;

    try {
        let cart = await Cart.findOne({ userId });
        let item = await Item.findOne({ _id: productId });

        if (!item) return res.status(404).send("Item not found!"); // not returning will continue further execution of code.

        if (!cart) return res.status(400).send("Cart not found");
        else {
            // if cart exists for the user
            let itemIndex = cart.items.findIndex(
                (p) => p.productId == productId
            );

            let itemOption = cart.items.findIndex(
                (p) => p.optionId == optionId
            );

            // Check if product exists or not
            if (itemIndex == -1)
                return res.status(404).send("Item not found in cart!");
            else {
                if (itemOption == -1)
                    return res.status(404).send("Item not found in cart!");
                else{
                    let productItem = cart.items[itemOption];
                    productItem.quantity = qty;
                    cart.items[itemOption] = productItem;
                }
            }
            cart.bill = cart.items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            cart = await cart.save();
            return res.status(201).send(cart);
        }
    } catch (err) {
        // just printing the error wont help us find where is the error. Add some understandable string to it.
        console.log("Error in update cart", err);
        res.status(500).send("Something went wrong");
    }
};

module.exports.delete_item = async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.itemId;
    const optionId = req.params.optionId;
    
    try {
        let cart = await Cart.findOne({ userId });
        let itemIndex = cart.items.findIndex((p) => p.productId == productId);
        let itemOption = cart.items.findIndex((p) => p.optionId == optionId);
        if (itemIndex > -1) {
            if (itemOption > -1){
                let productItem = cart.items[itemOption];
                cart.bill -= productItem.quantity * productItem.price;
                cart.items.splice(itemOption, 1);
            }
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};
