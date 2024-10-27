import { FormattedData } from '../../helper/formattedResponse.js';
import CityService from '../../service/address/city.service.js';

const service = new CityService();
export const create = async (req, res, next) => {
    try {
        console.log(req.body);
        const city = await service.createCity(req.body);
        res.status(201).json(FormattedData(true, city, 'city created'));
    } catch (error) {
        next(error);
    }
};
export const update = async (req, res, next) => {
    try {
        const city = await service.updateCity(req.params.id, req.body);
        res.status(200).json(FormattedData(true, city, 'city updated'));
    } catch (error) {
        next(error);
    }
};
export const deleteCity = async (req, res, next) => {
    try {
        const city = await service.deleteCity(req.params.id);
        res.status(200).json(FormattedData(true, city, 'city deleted'));
    } catch (error) {
        next(error);
    }
};
export const getAll = async (req, res, next) => {
    try {
        const cities = await service.getAll();
        res.status(200).json(FormattedData(true, cities, 'cities fetched'));
    } catch (error) {
        next(error);
    }
};
export const getById = async (req, res, next) => {
    try {
        const city = await service.getById(req.params.id);
        res.status(200).json(FormattedData(true, city, 'city fetched'));
    } catch (error) {
        next(error);
    }
};
