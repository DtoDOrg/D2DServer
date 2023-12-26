import dotenv from "dotenv";
dotenv.config()
export const CONFIG = {
    PORT: process.env.PORT || 3000,
    DATABASE:process.env.DB_URI
};