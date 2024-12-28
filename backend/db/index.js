import configs from "../config/index.js";
import mongoose from "mongoose";

const connectDB = async () => {

    try {
        await mongoose.connect(configs.dbUrl);
        console.log(`MongoDB Connected: ✅`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;