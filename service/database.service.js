import { CONFIG } from '../config/config.js';
import mongoose from 'mongoose';

// Create a connection to the database

export const DbConnection = async () => {
    try {
        const connection = await mongoose.connect(CONFIG.DATABASE);
        if (connection) {
            console.log('✅ Database Connected');
            return;
        }
        console.log(' connection error');
    } catch (error) {
        throw error;
    }
};
