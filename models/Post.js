const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	dateAdded: {
		type: Date,
		default: Date.now
	},
	dateModified: Date
});

module.exports = mongoose.model("Post", PostSchema);
