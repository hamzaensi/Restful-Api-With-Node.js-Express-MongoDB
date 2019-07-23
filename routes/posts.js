const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET Back All the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
// POST a New Post
router.post("", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET a specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removedpost = await Post.remove({ _id: req.params.postId });
    res.json(removedpost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a specific post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedpost = await Post.updateOne(
      { _id: req.params.postId },
      {
        title: "Hamza Update",
        description: "Hamza Description for update"
      }
    );
    res.json(updatedpost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
