// TODO: Shift Database from Local MongoDB Compass to MongoDB Atlas Cloud

// Import Section
import mongoose from "mongoose";

// Connecting to Database - MongoDB
const connectMongoDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then((data) => {
      console.log(
        `SUCCESS - MongoDB is connected at ${data.connection._connectionString}`
      );
    })
    .catch((err) => {
      console.log(`ERROR | MongoDB Connection | ${err}`);
    });
};
connectMongoDB();

// Exporting Database
export default mongoose.connection;
