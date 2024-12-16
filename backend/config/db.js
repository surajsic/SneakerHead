import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.MONGDB_URI) {
    throw new Error("Please provide MONGODB_URI")
}

async function connectDB (){
    try {
        await mongoose.connect(process.env.MONGDB_URI)
        console.log("Connected to MONGO DB")
    } catch (error) {
        console.log("MONGDO DB failed to connect", error)
        process.exit(1)
    }
}

export default connectDB