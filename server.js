// TODO: Not exactly sure -- maybe require in the routes and the store.js here??

const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

const apiRoutes = require("./routes/index.js");

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.use(express.static('public'));


// GET route for homepage
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
})

// GET route for notes page
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})
  



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);