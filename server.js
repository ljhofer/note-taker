// TODO: Not exactly sure -- maybe require in the routes and the store.js here??

const express = require("express");
const PORT = 3001;
const app = express();
const path = require("path");


// api/notes

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
})

app.get
    //notes
    // *
    // GET
    // POST