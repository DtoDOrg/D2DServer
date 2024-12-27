import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import OrderService from '../service/order.service.js';

const service = new OrderService();
export const createOrder = async (req, res, next) => {
    try {
        const order = await service.createOrder(req.body.paymentId, req.user.id, req.body.address, req.body.alterNativeMobileNo);
        return res.status(httpStatus.created).json(FormattedData(true, order, 'order created'));
    } catch (error) {
        next(error);
    }
};

export const getOrderByOrderId = async (req, res, next) => {
    try {
        const order = await service.getOrderByOrderId(req.params.id);
        return res.status(httpStatus.created).json(FormattedData(true, order, 'order fetched'));
    } catch (error) {
        next(error);
    }
};

export const getAllOrders = async (req, res, next) => {
    try {
        const order = await service.getAllOrders();
        return res.status(httpStatus.created).json(FormattedData(true, order, 'order fetched'));
    } catch (error) {
        next(error);
    }
};

export const getOrderByUserId = async (req, res, next) => {
    try {
        const order = await service.getOrderByUserId(req.user.id);
        return res.status(httpStatus.created).json(FormattedData(true, order, 'order fetched'));
    } catch (error) {
        next(error);
    }
};

export const updateOrderStatus = async (req, res, next) => {
    try {
        const orderStatus = await service.updateOrderStatus(req.body.orderId, req.body.status);
        return res.status(httpStatus.created).json(FormattedData(true, orderStatus, 'order updated'));
    } catch (error) {
        next(error);
    }
};
