import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected successfully');
        
    } catch (error) {
        console.error("MongoDB coneection failed.",error);
        process.exit(1)
    }
};

export default connectDB;