import { createClient } from 'redis';
import { CONFIG } from '../config/config.js';

const redisClient = createClient({
    password: CONFIG.REDIS_PASSWORD,
    socket: {
        host: CONFIG.REDIS_HOST,
        port: CONFIG.REDIS_PORT,
    },
});
export const startRedis = () => {
    try {
        console.log('starting redis...');
        redisClient.connect();
    } catch (error) {
        throw error;
    }
};
export const setDataToRedis = async (key, value) => {
    try {
        const result = await redisClient.set(key, value);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getDataFromRedis = async key => {
    try {
        const result = await redisClient.get(key);
        return result;
    } catch (error) {
        throw error;
    }
};
