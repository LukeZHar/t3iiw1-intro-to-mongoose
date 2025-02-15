// Purpose:

// Configure the server

// Defining routes, middlewares, CORS, debug logger setups, db connections, etc.

const express = require("express");

// instance of the express for configuration
const app = express();

// Server app config goes here....
// 
// app.verb(path, callback)
app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");

    res.json({
        message: "Hello world!"
    });
});

// Export the server for use in other parts of the project 
module.exports = {
    app
};