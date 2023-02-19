// to import express js
const express = require("express");
//to import chats from data
const { chats } = require("./data/data");
const dotenv = require("dotenv");

// to make instant of the express
const app = express();
dotenv.config();
//API for "/"
app.get("/", (req, res) => {
    res.send("API is running");
});
// APi for "/chat"
app.get("/api/chat", (req, res) => {
    res.send(chats);
})
// APi for specific ID
app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id === req.param.id);
    res.send(singleChat);
});



// to listen to port 5000

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));