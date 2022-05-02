const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
    },{ timestamps: true } //created and updated fields
    );

    module.exports = mongoose.model("Category", CategorySchema);