// The `Router` function is from the `express` module.
    // This module could create a new router object which allows me to define routes for the application
// I import the built-in Node.js fs (File System) module
    // This module provides methods for working with the file system
// I import the 'uniqid' module
    // This module is used to generate unique IDs.
const router = require("express").Router()
const fs = require("fs");
const uniqid = require("uniqid");


// The routes.get(()=>{}) is defining an "GET" route for the endpoint 
    // The first argument is the end point /api/notes
    // The second argument is an arrow function 
        // The arrow function will handle the req = request made to this endpoint using the GET method AKA res = response 
// The fs.readFile() is a method provided by the fs module to read the content of a file asynchronously
    // When I use readFile, Node.js will continue to process other tasks and won't wait/block for the file reading to be completed.
    // Once the reading is done, the provided callback function (in this case (err, data) => {...}) will be executed.
    // The first argument is "db/db.json"
        // It is the path to the file that the application needs to read
    // The second argument is "utf-8"
        // This specifies the character encoding of the file
        // If the encode had not be specified, the content will be returned as a Buffer object.
    // The third argument is (err, data) => {...}:
        // This is the callback function that will be executed once the file has been read, the callback takes two arguments "err" and "data"
            // err: If there's an error during the file reading process (e.g., the file doesn't exist or there are permission issues), 
                // This argument will contain information about that error. If no error occurred, this will be null.
            // data: 
                // If the file was read successfully, this argument will contain the content of the file as a string 
                    // This is made possible because "utf-8" encoding was specified
                // If there was an error, the content of this argument is not guaranteed
        // The if(err) throw err means when there's an error throw an the error and halting the execution of the code.
        // The return res.json(JSON.parse(data)); 
            // This means Parses the file contents (which is a string) into a JavaScript object using JSON.parse
            // then sends this object as a JSON response to the client.
router.get("/api/notes", (req, res)=>{
    fs.readFile("db/db.json", "utf-8", (err, data)=>{
        if(err) throw err;

        return res.json(JSON.parse(data))
    })
})