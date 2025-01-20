import mongoose from "mongoose";

async function connectToDB() {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log(`Connected to MongoDB at ${connection.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
}

export default connectToDB;