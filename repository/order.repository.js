import { getWeek } from 'date-fns';
import OrderModel from '../model/order.model.js';

const OrderRepository = {
    create: async data => {
        try {
            const order = await OrderModel.create(data);
            return order;
        } catch (error) {
            throw error;
        }
    },
    getOrderByOrderId: async orderId => {
        try {
            const order = await OrderModel.findById(orderId).populate({
                path: 'cartId',
                populate: {
                    path: 'services.service',
                    select: '-updatedAt -createdAt -description -steps -category -status -warranty',
                },
            });
            return order;
        } catch (error) {
            throw error;
        }
    },
    getOrderByUserId: async userId => {
        try {
            const order = await OrderModel.find({ userId: userId })
                .populate('cartId')
                .populate({
                    path: 'cartId',
                    populate: {
                        path: 'services.service',
                        select: '-updatedAt -createdAt -description -steps -category -status -warranty',
                    },
                })
                .sort({ createdAt: -1 });

            return order;
        } catch (error) {
            throw error;
        }
    },
    getAllOrders: async () => {
        try {
            const order = await OrderModel.find()
                .populate({
                    path: 'userId',
                    select: 'name email avatar,phone -_id',
                })
                .populate({
                    path: 'cartId',
                    populate: {
                        path: 'services.service',
                        select: '-updatedAt -createdAt -description -steps -category -status -warranty',
                    },
                });
            return order;
        } catch (error) {
            throw error;
        }
    },
    updateOrderStatus: async (orderId, status) => {
        try {
            const order = await OrderModel.findByIdAndUpdate(orderId, { status: status }, { new: true });
            return order;
        } catch (error) {
            throw error;
        }
    },
};

export default OrderRepository;
