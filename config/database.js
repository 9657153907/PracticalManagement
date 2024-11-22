import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://chaudharikomal1906:komal123@cluster0.0mqxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Practical-Management");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Connection failed",error);
    }
};
export default dbConnect;