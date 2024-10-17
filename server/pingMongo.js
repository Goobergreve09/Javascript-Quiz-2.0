// require("dotenv").config();

// const { MongoClient } = require("mongodb");

// // MongoDB connection URI (Update this if you're using MongoDB Atlas or a different connection)
// const uri = process.env.MONGODB_URI;
// console.log(uri);

// // Create a MongoClient instance
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Function to ping MongoDB
// async function pingMongoDB() {
//   try {
//     // Connect to MongoDB
//     await client.connect();
//     console.log("MongoDB is connected. Sending ping...");

//     // Ping the admin database
//     await client.db("admin").command({ ping: 1 });
//     console.log("Ping sent successfully.");
//   } catch (err) {
//     console.error("Error pinging MongoDB:", err);
//   } finally {
//     // Note: We are not closing the connection so the interval keeps running.
//     // Keeping it open to ensure the connection stays alive.
//   }
// }

// // Function to start the pinging process
// function startPinging() {
//   // Ping MongoDB every 5 minutes
//   pingMongoDB(); // Initial ping
//   setInterval(pingMongoDB, 5 * 60 * 1000); // Repeat ping every 5 minutes
// }

// // Start pinging as soon as the script is executed
// startPinging();
