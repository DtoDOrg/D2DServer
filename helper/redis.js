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
        redisClient.connect();
        redisClient.on('connect', () => console.log('redis connected'));
    } catch (error) {
        console.log(error);
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

export const deleteDataFromRedis = async key => {
    try {
        const result = await redisClient.del(key);
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
        console.log(error);
        throw error;
    }
};
