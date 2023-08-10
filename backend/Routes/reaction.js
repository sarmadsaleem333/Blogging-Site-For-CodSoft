const express = require("express");
const router = express.Router();
const Reaction = require("../Models/Reaction");
const fetchuser = require("../Middleware/fetchuser");

// Route 1: Route to like and comment any one's blog using post request  using url "/blogging/addreaction/:id"
router.post("/addreaction/:id", fetchuser, async() => {
    const { like, comment } = require.body;
    const postId = req.params.id;
    await Reaction.create({
        like: like,
        comment: comment,
        post: postId
    })




})

module.exports = router;