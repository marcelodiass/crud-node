const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});

app.get("/", (req, res) => {
	res.send("Hello from node api server");
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to Database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });
