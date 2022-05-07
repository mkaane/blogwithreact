const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Update
router.put("/:id", async(req, res) =>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },{new:true}); //when we send update request, mongo return us the updated user, this new:true means that.
            res.status(200).json(updatedUser);
        } catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("You cannot update another user's account!");
    }
});

//Delete
router.delete("/:id", async(req, res) =>{
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id)
        
        try{
            await Post.deleteMany({username:user.username})
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted.");
        } catch(err){
            res.status(500).json(err)
        } 
        }catch(err){
            res.status(404).json("User not found!");
        }
    }else{
        res.status(401).json("You cannot delete another user's account!");
    }
});
module.exports = router;