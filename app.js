const mongoose = require("mongoose");

const express = require("express");

const app = express();

require("dotenv/config");

//* middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//* routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

app.use("/", (req, res) => {
	res.status(200);
});

//* connect to database
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useCreateIndex: true },
	() => console.log("Connected to DB!!")
);

//* listen to port
app.listen(process.env.PORT || 3000, function() {
	//! may not work on some terminal
	process.stdout.write("\033c");
});
