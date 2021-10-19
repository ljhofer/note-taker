
//Requires express
const express = require("express");

// Imports the modular routers for /notes
const notesRouter = require("./notes");

const app = express();

//Initializes notes route
app.use("/notes", notesRouter);

module.exports = app;
