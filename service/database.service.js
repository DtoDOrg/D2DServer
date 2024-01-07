import { CONFIG } from "../config/config.js";
import mongoose  from "mongoose";

// Create a connection to the database

export const DbConnection = async() => {

    try {
     const connection = await mongoose.connect(CONFIG.DATABASE);

     console.log("Database connection established");
    } catch (error) {
     console.clear();

        console.log("database connection error")
        console.log(error);
    }

}


