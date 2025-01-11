import dotenv from "dotenv";
dotenv.config();

const configs = {
    sessionSecret: process.env.SESSION_SECRET || "fallbackSecretForDev",
    dbUrl: process.env.MONGO_DB_URL || "mongodb://localhost:27017/mydb",
    port: Number(process.env.PORT) || 5000,
}

configs.serverUrl = process.env.SERVER_URL || `http://localhost:${configs.port}`;

export default configs