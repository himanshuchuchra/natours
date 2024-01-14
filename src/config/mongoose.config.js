// TODO: Shift Database from Local MongoDB Compass to MongoDB Atlas Cloud

// Import Section
import mongoose from "mongoose";

// Connecting to Database - MongoDB
const connectMongoDB = async () => {
  try {
    const database = await mongoose.connect(process.env.MONGODB_URI);
    if (!database) {
      console.log(`ERROR 💥 | MongoDB Connection | mongoose.config.js`);
    }

    const connectionString = database.connection._connectionString;
    console.log(`SUCCESS 🚀 - MongoDB connected on ${connectionString}`);
  } catch (error) {
    console.log(`ERROR 💥 | MongoDB Connection | ${error}`);
  }
};
connectMongoDB();

// Exporting Database
export default mongoose.connection;
