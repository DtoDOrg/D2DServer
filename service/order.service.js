import ApiError, { httpStatus } from '../middleware/error.js';
import CartRepository from '../repository/cart.repository.js';
import OrderRepository from '../repository/order.repository.js';

class OrderService {
    async createOrder(paymentId, userId) {
        try {
            const cart = await CartRepository.getCart(userId);
            if (!cart) {
                throw new ApiError(httpStatus.notFound, 'cart not found');
            }
            const data = {
                userId,
                paymentId,
                cartId: cart._id,
            };
            const order = await OrderRepository.create(data);
            return order;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
    async getOrderByOrderId(orderId) {
        try {
            const order = await OrderRepository.getOrderByOrderId(orderId);
            return order;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
    async getAllOrders() {
        try {
            const order = await OrderRepository.getAllOrders();
            return order;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }

    async getOrderByUserId(userId) {
        try {
            const order = await OrderRepository.getOrderByUserId(userId);
            return order;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }

    async updateOrderStatus(orderId, status) {
        try {
            const order = await OrderRepository.updateOrderStatus(orderId, status);
            if (status == 'placed') {
                CartRepository.delete(order.cartId);
            }
            return order;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
}

export default OrderService;
