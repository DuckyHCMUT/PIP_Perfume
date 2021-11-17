const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());

// used in production to serve client files
/*if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}*/

// connecting to mongoDB and then running server on port 4000
const dbURI = `mongodb+srv://${process.env.MONGO_ATLAS_USRN}:${process.env.MONGO_ATLAS_PW}@unicluster.wis5k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const port = process.env.PORT || 3000;
mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) => app.listen(port))
    .then(console.log("DB Connected, Listening to port " + port))
    .catch((err) => console.log(err));
