const mongoose = require("mongoose");
const { PostModel } = require("../models/PostModel.js");

// function connecting to the database
async function dbConnect() {
    let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;
    await mongoose.connect(databaseUrl);
    console.log(databaseUrl);
    console.log("Database connected");
}

async function dbDisconnect() {
    // Disconnect from the database
    // await mongoose.disconnect();
    await mongoose.connection.close();
    console.log("Database disconnected");
}

module.exports = {
    dbConnect, dbDisconnect
};