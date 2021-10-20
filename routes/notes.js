
const fs = require("fs");
const notes = require("express").Router();
const noteJson = require("../db/db.json");

const { v4: uuidv4 } = require('uuid');

//GET route for retreiving notes data
notes.get("/", (req, res) => {
    res.json(noteJson);
});


//POST route for adding notes data
notes.post("/", (req, res) => {
    if (req.body) {

        noteJson.push(req.body);
        // noteJson.jso
        fs.writeFile('./db/db.json', JSON.stringify(noteJson), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Success!")
            }
        });
        res.json(`Note added successfully`);
      } else {
        res.error('Error in adding notes');
      }

})

module.exports = notes;