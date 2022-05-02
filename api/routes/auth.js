const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async(req, res) =>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({ //we can write new User(req.body), it is the same thing as below 
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })
        const user = await newUser.save(); //coming from mongoose
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err)
    }
});
//LOGIN
router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({username: req.body.username}); //username control
        !user && res.status(400).json("Wrong enter")
        
        const validate = await bcrypt.compare(req.body.password, user.password) //password control
        !validate && res.status(400).json(user);

        const {password, ...others} = user._doc;
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;