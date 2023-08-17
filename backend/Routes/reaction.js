const express = require("express");
const router = express.Router();
const Reaction = require("../Models/Reaction");
const Post = require("../Models/Post");
const User = require("../Models/User");
const fetchuser = require("../Middleware/fetchuser");
const { validationResult, body } = require('express-validator');


// Route 1: Route to comment any one's blog using post request  using url "/blogging/reaction/addreaction/:id"
// here id is of the post to which you are reacting too
router.post("/addreaction/:id", [
    body("comment").notEmpty().withMessage("Comment must not be empty")], fetchuser, async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const response = errors.array();
            return res.status(400).json(response[0].msg);
        }
        const post_user=await User.findById(req.user.id)
        try {
            const { comment } = req.body;
            const postId = req.params.id;
            await Reaction.create({
                comment: comment,
                post: postId,
                user: post_user.name,
            });
            await Post.findByIdAndUpdate(postId, { $inc: { comments: +1 } }, { new: true });
            res.json("You added comment to this post");

        } catch (error) {
            console.log(error);
            res.status(400).send("Internal server error occurred");
        }
    })
// Route 2: Edit  comment  using put request  using url "/blogging/reaction/editreaction/:id"
// here id is of reaction
router.put("/editreaction/:id", async (req, res) => {
    try {

        const { comment } = req.body;
        const newReaction = {};
        if (comment) { newReaction.comment = comment; }

        let reaction = await Reaction.findById(req.params.id);

        if (!reaction) { return res.status(404).send("Not found"); }
        reaction = await Reaction.findByIdAndUpdate(req.params.id, { $set: newReaction }, { new: true });
        res.json("Your comment to this has been successfully updated")


    } catch (error) {
        console.log(error)
        res.status(400).json("Internal Server Error occured");
    }
});

//Route 4: Route delete reaction of the logged using PUT request "blogging/reaction/deletereaction/:id"

router.put("/deletereaction/:id", async (req, res) => {
    try {
        let reaction = await Reaction.findById(req.params.id);
        if (!reaction) {
            return res.status(404).json("Not found");
        }
        reaction = await Reaction.findByIdAndDelete(req.params.id);
        await Post.findByIdAndUpdate(postId, { $inc: { comments: -1 } }, { new: true });
        res.json("Your comment to this has been succesfully deleted");

    } catch (error) {
        res.status(400).json("Internal Server Error occured");
    }
});
//Route 5: Get reaction of the  using get request "blogging/reaction/getreaction/:id"
//here id is of post 
router.get("/getreaction/:id", async (req, res) => {
    try {
        let reaction = await Reaction.find({ post: req.params.id });
        res.json(reaction)

    } catch (error) {
        res.status(400).json("Internal Server Error occured");
    }
});

module.exports = router;