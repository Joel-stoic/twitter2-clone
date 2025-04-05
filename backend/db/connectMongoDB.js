import mongoose from "mongoose";


const connectMongoDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            serverSelectionTimeoutMS: 60000,
            connectTimeoutMS: 60000,
            socketTimeoutMS: 60000
        })
        console.log(`MongoDB connected:${conn.connection.host}`)
    } catch (error) {
        console.log(`Error connection to mongoDB: ${error.message}`)
        process.exit(1)
    }
}


export default connectMongoDB;