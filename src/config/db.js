require("dotenv").config();

const mongoose = require("mongoose");

const dbConnection = process.env.DB_CONNECTION;

async function connectToDatabase() {
  try {
    const connectionUri = `${dbConnection}`;
    await mongoose.connect(connectionUri, {
      authSource: "admin",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.stack}`);
  }
}

connectToDatabase();