import dotenv from 'dotenv';
import { STATES } from 'mongoose';
dotenv.config();
export const CONFIG = Object.freeze({
    PORT: process.env.PORT,
    DATABASE: process.env.DB_URI,
    APP_KEY: process.env.APP_KEY,
    IMAGE_KIT_PUB: process.env.IMAGE_KIT_PUBLIC_KEY,
    IMAGE_KIT_PRI: process.env.IMAGE_KIT_PRIVATE_KEY,
    IMAGE_KIT_ID: process.env.IMAGE_KIT_ID,
    ADMIN_ROLE: process.env.ADMIN_ROLE,
    USER_ROLE: process.env.USER_ROLE,
    SUPER_ADMIN_ROLE: process.env.SUPER_ADMIN_ROLE,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
});
export const redisKeys = Object.freeze({
    USERS: 'users',
    SHOPS: 'shops',
    ORDERS: 'orders',
    CATEGORIES: 'categories',
    RULES: 'rules',
    PRODUCTS: 'products',
    STATES: 'states',
    CITIES: 'cities',
});
