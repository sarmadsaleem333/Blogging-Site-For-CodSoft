const express = require("express");
const router = express.Router();
const Reaction = require("../Models/Reaction");
const fetchuser = require("../Middleware/fetchuser");

// Route 1: Route to like and comment any one's blog using post request  using url "/blogging/reaction/addreaction/:id"
// here id is of the post to which you are reacting too
router.post("/addreaction/:id", fetchuser, async (req, res) => {
    try {
        const { like, comment } = req.body;
        const postId = req.params.id;
        await Reaction.create({
            like: like,
            comment: comment,
            post: postId,
            user:req.user.id
        });
        res.send("You reacted to this post");

    } catch (error) {
        console.log(error);
        res.status(400).send("Internal server error occurred");
    }
})
// Route 2: Edit like and comment  using put request  using url "/blogging/reaction/editreaction/:id"
// here id is of reaction
router.put("/editreaction/:id", async (req, res) => {
    try {

        const { like, comment } = req.body;
        const newReaction = {};
        if (like==true || like ==false) { newReaction.like = like; }
        if (comment) { newReaction.comment = comment; }

        let reaction = await Reaction.findById(req.params.id);

        if (!reaction) { return res.status(404).send("Not found"); }
        reaction = await Reaction.findByIdAndUpdate(req.params.id, { $set: newReaction }, { new: true });
        res.json("Your reaction has been successfully updated")


    } catch (error) {
        console.log(error)
        res.status(400).json("Internal Server Error occured");
    }
});

//Route 4: Route delete reaction of the logged in vendor using PUT request "blogging/reaction/deletereaction/:id"

router.put("/deletereaction/:id", async (req, res) => {
    try {
        let reaction = await Reaction.findById(req.params.id);
        if (!reaction) {
            return res.status(404).json("Not found");
        }
        reaction = await Reaction.findByIdAndDelete(req.params.id)
        res.json("Your reaction has been succesfully deleted");

    } catch (error) {
        res.status(400).json("Internal Server Error occured");
    }
});

module.exports = router;