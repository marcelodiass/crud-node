const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
	res.send("Hello from node api server");
});

app.post("/api/products", (req,res) => {
    console.log(req.body)
    res.send(req.body)
})

mongoose
	.connect(
		"mongodb+srv://marcelohespanholdias:hjC2z3rR7r1Jzswi@cluster0.ntelke5.mongodb.net/NODE_API?retryWrites=true&w=majority"
	)
	.then(() => {
		console.log("Connected to Database!");
		app.listen(3000, () => {
			console.log("Server listening on port 3000");
		});
	})
	.catch((e) => {
		console.log("Connection failed! " + e);
	});
