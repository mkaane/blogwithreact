const express = require("express");
const app = express()
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
    })
    .then(console.log("connected to mongo"))
    .catch((err) => console.log(err));
    const storage = multer.diskStorage({
        destination:(req,file,cb) => {
            cb(null,"images")
        },
        filename:(req,file,cb) => {
            cb(null, req.body.name);
        }
    });

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploaded!");
})
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5001", ()=>{
    console.log("backend is running");
});

//why we use nodemon?: normally console.log("hello") wont show, because system does not listen our program, only listens 5001 port.
//but when we use nodemon, system can listen our program.