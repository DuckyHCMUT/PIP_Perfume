const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const itemRoutes = require("./routes/item.js");
const cartRoutes = require("./routes/cart.js");
const orderRoutes = require("./routes/order.js");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// used in production to serve client files
/*if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}*/

app.use("/api", authRoutes);
app.use("/api", itemRoutes);
app.use("/api", cartRoutes);
app.use("/api", orderRoutes);

// connecting to mongoDB and then running server on port 4000
const dbURI = config.get("dbURI");
const port = process.env.PORT || 4000;
mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) =>
        app.listen(port, () =>
            console.log("DB Connected, Listening to port " + port)
        )
    )
    .catch((err) => console.log(err));
