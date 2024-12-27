import { FormattedData } from '../../helper/formattedResponse.js';
import { httpStatus } from '../../middleware/error.js';
import AddressService from '../../service/address/address.service.js';
import { getAll } from '../user.controller.js';

const service = new AddressService();
export const createAddress = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { street, landmark, city, state, zip } = req.body;

        const address = await service.createAddress(userId, street, landmark, city, state, zip);
        return res.status(httpStatus.created).json(FormattedData(true, address, 'address created'));
    } catch (error) {
        next(error);
    }
};
export const getAllAddress = async (req, res, next) => {
    try {
        const result = await service.getAllAddress(req.user.id);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'address fetched'));
    } catch (error) {
        next(error);
    }
};

export const getAddressById = async (req, res, next) => {
    try {
        const result = await service.getAddressById(req.params.id);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'address fetched'));
    } catch (error) {
        next(error);
    }
};

export const updateAddress = async (req, res, next) => {
    try {
        const result = await service.updateAddress(req.params.id, req.body);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'address updated'));
    } catch (error) {
        next(error);
    }
};

export const deleteAddress = async (req, res, next) => {
    try {
        const result = await service.deleteById(req.params.id);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'address deleted'));
    } catch (error) {
        next(error);
    }
};
