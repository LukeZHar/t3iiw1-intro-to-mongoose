// Purpose of this file 

// First point of entry
// Initialise the server
// Get the port
// Tell the server to listen to incoming traffic 

// Server is configured in this file
const { app } = require("./server.js");

// Get the PORT
const PORT = process.env.PORT || 3000;

// Start the server 
app.listen(PORT, () => {
    // Server is running
    console.log(`Server running on port: ${PORT}`);
});