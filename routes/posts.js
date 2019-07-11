const Post = require("../models/Post");

const express = require("express");

const router = express.Router();

//* Post page, loads all Post
router.get("/", async (req, res) => {
	try {
		res.json(await Post.find());
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

//* Load a specific post
router.get("/:postId", async (req, res) => {
	try {
		res.json(await Post.findById(req.params.postId));
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

//* Update a specific post
router.patch("/:postId", async (req, res) => {
	try {
		res.json(
			await Post.updateOne(
				{ _id: req.params.postId },
				{
					$set: {
						title: req.body.title,
						content: req.body.content,
						dateModified: Date.now()
					}
				}
			)
		);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

//* Delete a specific post
router.delete("/:postId", async (req, res) => {
	try {
		res.json(await Post.remove({ _id: req.params.postId }));
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

//* Save a post
router.post("/", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content
	});

	try {
		res.json(await post.save());
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

module.exports = router;
