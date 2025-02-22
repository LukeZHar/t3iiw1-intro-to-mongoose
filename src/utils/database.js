const mongoose = require("mongoose");

// function connecting to the database
async function dbConnect() {
    let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27018/${process.env.npm_package_name}`;

    await mongoose.connect(databaseUrl);
    console.log(databaseUrl);
    console.log(`Connected to database: ${databaseUrl}`);
}

module.exports = {
    dbConnect
};