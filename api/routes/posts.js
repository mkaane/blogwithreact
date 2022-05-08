const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE NEW POST
router.post("/", async(req, res) =>{
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE POST
router.put("/:id", async(req, res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                }, {new: true});
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json("You cannot update another user's post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE POST
router.delete("/:id", async(req, res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                await post.delete();
                res.status(200).json("Post has been deleted!");
            } catch (err) {
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json("You cannot delete another user's post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET POST
router.get("/:id", async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err)
    }
});

//GET ALL POST
router.get("/", async(req, res)=>{
    const username = req.query.user; //after "posts" it can be user or categories (api/posts?user=kaan  or  api/posts?cat=music)
    const catName = req.query.cat; //so if-else blocks are created below
    try{
        let posts; //it is changable
        if(username){
            posts = await Post.find({username:username})
        }
        else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }})
        }
        else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
        
    }
    catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;