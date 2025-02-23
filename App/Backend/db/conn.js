// Conn with dbs
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}JobPortal`);
    console.log(
      `Connection with Database estabilish succesfully ${conn.connection.host}`
    );
  } catch (error) {
    console.error("Error! Connection error");
  }
};

export default connectDB;
