import express from 'express';
import { DbConnection } from './service/database.service.js';
import { startServer } from './service/express.service.js';
const app = express();

const start = async () => {
    try {
        await DbConnection();
        // await startRedis();
        startServer(app);
    } catch (error) {
        console.log(error);
    }
};
start();
