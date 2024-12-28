import dotenv from "dotenv";
dotenv.config();

const configs = {
    sessionSecret: process.env.SESSION_SECRET || "fallbackSecretForDev",
    dbUrl: process.env.MONGO_DB_URL || "mongodb://localhost:27017/mydb",
    port: process.env.PORT || 5000,
}

export default configs