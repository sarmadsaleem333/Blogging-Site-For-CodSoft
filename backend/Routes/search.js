const express = require("express");
const router = express.Router();
const Post = require("../Models/Post");
const fetchuser = require("../Middleware/fetchuser");


//Route 1: For searching items on the basis of their type by get request "/blogging/search/searchitems"
router.get("/searchitems", fetchuser, async (req, res) => {
    const searchQuery = req.query.q; // Get search query from query parameter

    try {
        const searchResults = await Post.find({

            $or: [
                { text: { $regex: searchQuery, $options: 'i' } },   
                { topic: { $regex: searchQuery, $options: 'i' } }, 
                { type: { $regex: searchQuery, $options: 'i' } }, 
            ],
        });

        res.json(searchResults);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

module.exports = router;