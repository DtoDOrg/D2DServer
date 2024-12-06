import express from 'express';
import { createShop, deleteShop, getAllShops, getShopByCity, getShopById, updateShopStatus } from '../controller/depricated/shop.js';
import { upload } from '../middleware/multer.js';
import { createShopValidation, shopStatus } from '../middleware/reqValidation.js';

const router = express.Router();

//get by id
router.get('/:id', getShopById);

//get by city
router.get('/city/:city', getShopByCity);

//get all shops
router.get('/', getAllShops);

//create shop
router.post('/', upload.single('image'), createShopValidation, createShop);

//update shop status
router.put('/status/:id', shopStatus, updateShopStatus);

//delete shop
router.delete('/:id', deleteShop);

export { router as ShopRouter };
