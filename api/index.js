const express = require("express");
const app = express()
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
    })
    .then(console.log("connected to mongo"))
    .catch((err) => console.log(err));
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

//console.log("hello")

app.use("/", (req, res) => {
    console.log("This is main url") //when we do a request to localhost:5001, it will write This is main url (only localhost:5001/)
}) //if we write app.use("/kaan")blabla  then when we go to localhost:5001/kaan, this message will show.
app.listen("5001", ()=>{
    console.log("backend is running");
});

//why we use nodemon?: normally console.log("hello") wont show, because system does not listen our program, only listens 5001 port.
//but when we use nodemon, system can listen our program.