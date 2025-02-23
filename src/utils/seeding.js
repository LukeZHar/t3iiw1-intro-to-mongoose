// Seeding values into the database

const { createPost } = require("../controllers/PostController.js");
const { dbConnect, dbDisconnect } = require("./database.js");

async function seed() {
    await dbConnect();
    console.log("Connected to the database");

    await createPost("Important Post", "This is an important post!");

    console.log("Database seeded");

    await dbDisconnect();
}

// dbConnect().then(() => {
//     console.log("Connected to the database");
//     seed();
// })

seed();