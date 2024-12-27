import ApiError, { httpStatus } from '../middleware/error.js';
import CartRepository from '../repository/cart.repository.js';
import OrderRepository from '../repository/order.repository.js';
import jobRepository from '../repository/job.repository.js';

class OrderService {
    async createOrder(paymentId, userId, address, alterNativeMobileNo) {
        try {
            const cart = await CartRepository.getCart(userId);
            console.log(cart);
            if (!cart) {
                throw new ApiError(httpStatus.notFound, 'cart not found');
            }
            const data = {
                userId,
                paymentId,
                cartId: cart._id,
                address,
                alterNativeMobileNo,
            };
            console.log(data);
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
                const cartInfo = await CartRepository.getCart(order.userId);
                const services = cartInfo.services;
                for (let i = 0; i < services.length; i++) {
                    await jobRepository.create({
                        service: services[i].service._id,
                        category: services[i].service.category,
                        price: services[i].service.price,
                        status: 'pending',
                        state: order.address.state,
                        city: order.address.city,
                        address: order.address.id,
                        date: services[i].date,
                        time: services[i].time,
                        user: order.userId,
                        orderId: order._id,
                    });
                }

                CartRepository.update(order.cartId, { orderPlaced: true });
            }
            return order;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
}

export default OrderService;
