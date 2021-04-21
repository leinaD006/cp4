const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();


const postSchema = new mongoose.Schema({
    book: String,
    title: String,
    review: String,
    created: {
      type: Date,
      default: Date.now
    },
  });
  
  const Post = mongoose.model('Post', postSchema);

  router.post("/", async (req, res) => {
    const post = new Post({
      book: req.body.book,
      title: req.body.title,
      review: req.body.review,
    });
    try {
      await post.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  router.get("/all", async (req, res) => {
    try {
      let posts = await Post.find().sort({
        created: -1
      });
      return res.send(posts);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  module.exports = {
    model: Post,
    routes: router,
  }