import { FormattedData } from '../../helper/formattedResponse.js';
import { imageDelete } from '../../helper/imageDeleter.js';
import { imageUploader } from '../../helper/imageUploader.js';
import ShopService from '../../service/depricated/shop.service.js';

const shopService = new ShopService();

//shop by id
export const getShopById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const shop = await shopService.getShopById(id);
        res.status(200).json(FormattedData(true, shop, 'shop fetched'));
    } catch (error) {
        next(error);
    }
};

//get shop by city

export const getShopByCity = async (req, res, next) => {
    try {
        const city = req.params.city.toLowerCase();
        const shop = await shopService.getShopByCity(city);
        res.status(200).json(FormattedData(true, shop, 'shop fetched'));
    } catch (error) {
        next(error);
    }
};

//all shops

export const getAllShops = async (req, res, next) => {
    try {
        const shops = await shopService.getAllShops();
        res.status(200).json(FormattedData(true, shops, 'shops fetched'));
    } catch (error) {
        next(error);
    }
};

//create shop

export const createShop = async (req, res, next) => {
    let imageUrl = '';
    try {
        imageUrl = await ImageUploader(req.file, 'shops');
        const data = {
            image: imageUrl,
            ...req.body,
        };
        const shop = await shopService.addShop(data);
        res.status(201).json(FormattedData(true, shop, 'shop created'));
    } catch (error) {
        ImageDeleter(imageUrl);
        next(error);
    }
};

//update status
export const updateShopStatus = async (req, res, next) => {
    try {
        const result = await shopService.updateStatus(req.params.id, req.body.status);
        res.status(200).json(FormattedData(true, result, 'update success'));
    } catch (error) {
        next(error);
    }
};

//delete shop
export const deleteShop = async (req, res, next) => {
    try {
        const result = await shopService.deleteShop(req.params.id);

        res.status(200).json(FormattedData(true, result, 'shop deleted'));
    } catch (error) {
        next(error);
    }
};
