import dotenv from 'dotenv';
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
    SERVICE_PROVIDER: process.env.SERVICE_PROVIDER,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    EMAIL: process.env.SMPT_MAIL,
    PASSWORD: process.env.SMPT_PASSWORD,
    MAIL_GUN_API_KEY: process.env.MAIL_GUN_API_KEY,
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
