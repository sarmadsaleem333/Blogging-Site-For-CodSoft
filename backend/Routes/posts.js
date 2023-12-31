const express = require("express");
const router = express.Router();
const { validationResult, body } = require('express-validator');
const Post = require("../Models/Post");
const User = require("../Models/User");
const fetchuser = require("../Middleware/fetchuser");
const multer = require("multer");


// store image in src/images folder which the user will upload and storing the image name with suffix of date
// and storing image name in data base
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "backend/public/images/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname)
    }
})
const upload = multer({ storage: storage })


// Route 1: Add a post by post request using url "/blogging/posts/addpost".Login required
router.post("/addpost", fetchuser, [
    body("text", "Enter text of atleast 20 characters"), //.isLength({ min: 20 }),
    body("topic", "Enter text of atleast 8 characters"), //.isLength({ min: 8 }),
    body("type", "Enter text of atleast 2 characters"), //.isLength({ min: 2}),
], upload.single("image"),
    async (req, res) => {
        // if there are errors return the bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const response = errors.array();
            console.log(response[0].msg)
            return res.status(400).json(response[0].msg);
        }
        const post_user=await User.findById(req.user.id)
        try {
            const imageName = req.file.filename;
            const { text, topic, type } = req.body;
            await Post.create({
                text: text, image: imageName,
                user_name: post_user.name,
                user:req.user.id,
                comments: 0,
                topic: topic,
                type: type
            })
            res.json("Post uploaded succesfully");

        } catch (error) {
            res.json("Error uploading post");

        }
    })

//Route 2 : Get all logged in user's posts using get request using url "/blogging/posts/getmyposts".Login required
router.get("/getmyposts", fetchuser, async (req, res) => {
    try {
        let posts = await Post.find({ user: req.user.id });
        res.send(posts);
    } catch (error) {
        res.json("Error uploading pictures")
        console.log(error);
    }
});
//Route 2 : Edit own posts using put request using url "/blogging/posts/editpost/:id".Login required

router.put("/editpost/:id", fetchuser, upload.single("image"), async (req, res) => {
    try {
        const { text, topic, type } = req.body;
        let newPost = await Post.findById(req.params.id);
        if (!newPost) {
            return res.json("The post can't be found");
        }
        if (req.file) {
            newPost.image = req.file.filename;;
        }
        if (text) {
            newPost.text = text;
        }
        if (topic) {
            newPost.topic = topic;
        }
        if (type) {
            newPost.type = type;
        }
        await Post.findByIdAndUpdate(req.params.id, { $set: newPost }, { new: true });
        res.json("Successfully! Your post has been edited");

    } catch (error) {
        res.json("Error editing Post")
        console.log(error);
    }
});

//Route 3 : Delete own posts using put request using url "/blogging/posts/deletepost/:id".Login required
router.put("/deletepost/:id", fetchuser, async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json(" Post did not found");
        }
        post = await Post.findByIdAndDelete(req.params.id)
        res.json("Your item has been succesfully deleted");

    } catch (error) {
        res.status(400).json("Internal Server Error occured");
    }
});

//Route 4:Get the posts of all by post request by "/blogging/posts/getallposts"
router.get("/getallposts", fetchuser, async (req, res) => {
    try {
        let posts = await Post.find({}).sort({ date: -1 });
        res.send(posts);
    } catch (error) {
        res.json("Error getting posts")
        console.log(error);
    }
})
//Route 5:Get the posts of all by post of required user request by "/blogging/posts/getpostofrequireduser/:id"
router.get("/getpostofrequireduser/:id", fetchuser, async (req, res) => {
    try {

        let posts = await Post.find({ user: req.params.id });
        res.send(posts);
    } catch (error) {
        res.json("Error getting posts")
        console.log(error);
    }
})
//Route 5:Get the posts of all by post of required id  request by "/blogging/posts/getpostofrequiredid/:id"
router.get("/getpostofrequiredid/:id", fetchuser, async (req, res) => {
    try {
        let posts = await Post.findById(req.params.id);
        res.send(posts);
    } catch (error) {
        res.json("Error getting post")
        console.log(error);
       
    }
})



module.exports = router;