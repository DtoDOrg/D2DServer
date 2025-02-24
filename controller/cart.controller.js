import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import CartService from '../service/cart.service.js';

const service = new CartService();
export const addToCart = async (req, res, next) => {
    try {
        const result = await service.addToCart(req.user.id, req.body.serviceId);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'service added to cart'));
    } catch (error) {
        next(error);
    }
};

export const getCart = async (req, res, next) => {
    try {
        const result = await service.getCart(req.user.id);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'cart'));
    } catch (error) {
        next(error);
    }
};

export const decrementQuantity = async (req, res, next) => {
    try {
        const result = await service.decrementQuantity(req.user.id, req.body.serviceId);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'quantity decremented'));
    } catch (error) {
        next(error);
    }
};

export const incrementQuantity = async (req, res, next) => {
    try {
        const result = await service.incrementQuantity(req.user.id, req.body.serviceId);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'quantity incremented'));
    } catch (error) {
        next(error);
    }
};

export const clearCart = async (req, res, next) => {
    try {
        console.log(req.user.id);
        const result = await service.deleteCart(req.user.id);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'cart cleared'));
    } catch (error) {
        next(error);
    }
};
export const addNotes = async (req, res, next) => {
    try {
        const result = await service.addNotes(req.user.id, req.body.notes);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'notes added'));
    } catch (error) {
        next(error);
    }
};

export const removeNotes = async (req, res, next) => {
    try {
        const result = await service.removeNotes(req.user.id);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'notes removed'));
    } catch (error) {
        next(error);
    }
};
export const addAlternativeMobileNumber = async (req, res, next) => {
    try {
        const result = await service.addAlternativeMobileNumber(req.user.id, req.body.mobile);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'alternative mobile number added'));
    } catch (error) {
        next(error);
    }
};

export const removeAlternativeMobileNumber = async (req, res, next) => {
    try {
        const result = await service.removeAlternativeMobileNumber(req.user.id);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'alternative mobile number removed'));
    } catch (error) {
        next(error);
    }
};
