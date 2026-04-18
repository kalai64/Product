import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Mongo DB Connected");
  } catch (error) {
    console.log("Mongo DB connection failed", error.message);
  }
};