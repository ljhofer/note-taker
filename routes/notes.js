
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
        
        //Creates a unique ID for new note and pushes the note into notesJson
        newID = uuidv4();
        req.body["id"] = newID; 
        noteJson.push(req.body);

        // Writes the updated variable to a JSON string
        fs.writeFile('./db/db.json', JSON.stringify(noteJson), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Success!")
            }
        });
        res.json("Note added successfully.");
    } else {
        res.error("Error in adding note.");
    }

})

//DELETE route to delete a saved note
notes.delete("/:id", (req, res) => {
    let requestID = req.params.id;

    if(requestID) {
    
       // Searches for the id value of the deleted note in the notes array
        let indexNumber = noteJson.findIndex(function(note) {
            return requestID === note.id;
        })
        
        // Deletes the object that matches the id of deleted note
        noteJson.splice(indexNumber, 1);

        // Writes the updated array back to the db.json file
        fs.writeFile("./db/db.json", JSON.stringify(noteJson), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Success!")
            }
        });
        res.json("Note deleted successfully.");
    } else {
        res.error("Error in deleting notes.");
    }

})

// Makes notes available for exporting
module.exports = notes;