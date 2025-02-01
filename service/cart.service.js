import { ca } from 'date-fns/locale';
import ApiError, { httpStatus } from '../middleware/error.js';
import CartRepository from '../repository/cart.repository.js';
import serviceRepository from '../repository/service/services.repository.js';
const externalCharge = 10;

class CartService {
    async addToCart(userId, serviceId) {
        try {
            const cart = await CartRepository.getCart(userId);
            const serviceInfo = await serviceRepository.getServiceById(serviceId);
            if (!serviceInfo) {
                throw new ApiError(httpStatus.notFound, 'service not found');
            }

            if (cart) {
                const service = cart.services.find(item => item.service._id.toString() === serviceId.toString());
                if (service) {
                    throw new ApiError(httpStatus.badRequest, 'service already added');
                }
                cart.services.push({ service: serviceId, quantity: 1 });
                cart.charges += serviceInfo.tax + externalCharge;
                cart.grossTotal += serviceInfo.price;
                cart.total = cart.grossTotal - cart.discount + cart.charges;
                const newCart = await cart.save();
                return newCart;
            }
            const data = {
                userId,
                services: [{ service: serviceId, quantity: 1 }],
                grossTotal: serviceInfo.price,
                charges: serviceInfo.tax + externalCharge,
                total: serviceInfo.price + serviceInfo.tax + externalCharge,
            };
            const newCart = await CartRepository.create(data);
            return newCart;
        } catch (error) {
            throw error;
        }
    }
    async getCart(userId) {
        try {
            const cart = await CartRepository.getCart(userId);
            if (!cart) {
                throw new ApiError(httpStatus.notFound, 'cart not found');
            }

            return cart;
        } catch (error) {
            throw error;
        }
    }
    async decrementQuantity(userId, serviceId) {
        try {
            const cart = await CartRepository.getCart(userId);
            const serviceInfo = await serviceRepository.getServiceById(serviceId);
            if (cart) {
                const service = cart.services.find(item => item.service._id.toString() === serviceId.toString());
                if (service) {
                    if (service.quantity === 1) {
                        cart.services = cart.services.filter(item => item.service._id.toString() !== serviceId.toString());
                        cart.grossTotal -= serviceInfo.price;
                        cart.charges = serviceInfo.tax + externalCharge;
                        cart.total = cart.grossTotal - cart.discount + serviceInfo.tax;
                        await cart.save();
                        return cart;
                    }

                    service.quantity = service.quantity - 1;
                    cart.grossTotal -= serviceInfo.price;
                    cart.charges -= serviceInfo.tax;
                    cart.total = serviceInfo.price - cart.discount + serviceInfo.tax;
                    const newCart = await cart.save();
                    return newCart;
                }
                throw new ApiError(httpStatus.notFound, 'service not found in cart');
            }
            throw new ApiError(httpStatus.notFound, 'cart not found');
        } catch (error) {
            throw error;
        }
    }
    async incrementQuantity(userId, serviceId) {
        try {
            const cart = await CartRepository.getCart(userId);
            const serviceInfo = await serviceRepository.getServiceById(serviceId);
            if (cart) {
                const service = cart.services.find(item => item.service._id.toString() === serviceId);
                if (service) {
                    service.quantity = service.quantity + 1;
                    cart.grossTotal += serviceInfo.price;
                    cart.charges += serviceInfo.tax;
                    cart.total = cart.grossTotal - cart.discount + cart.charges;
                    await cart.save();
                    return cart;
                }
                throw new ApiError(httpStatus.badRequest, 'service not found');
            }
            throw new ApiError(httpStatus.notFound, 'cart not found');
        } catch (error) {
            throw error;
        }
    }
    async deleteCart(userId) {
        try {
            const cartInfo = await CartRepository.getCart(userId);
            if (!cartInfo) {
                throw new ApiError(httpStatus.notFound, 'cart not found');
            }
            const cart = await CartRepository.delete(cartInfo.id);
            return cart;
        } catch (error) {
            throw error;
        }
    }
    async addAlternativeMobileNumber(userId, mobileNumber) {
        try {
            const cartInfo = await CartRepository.getCart(userId);
            if (!cartInfo) {
                throw new ApiError(httpStatus.notFound, 'cart not found');
            }
            const cart = await CartRepository.update(cartInfo.id, { alterNativeMobileNo: mobileNumber });
            return cart;
        } catch (error) {
            throw error;
        }
    }
    async removeAlternativeMobileNumber(userId) {
        try {
            const cartInfo = await CartRepository.getCart(userId);
            if (!cartInfo) {
                throw new ApiError(httpStatus.notFound, 'cart not found');
            }
            const cart = await CartRepository.update(cartInfo.id, { alterNativeMobileNo: '' });

            return cart;
        } catch (error) {
            throw error;
        }
    }

    async addNotes(userId, notes) {
        try {
            const cartInfo = await CartRepository.getCart(userId);
            if (!cartInfo) {
                throw new ApiError(httpStatus.notFound, 'cart not found');
            }
            const cart = await CartRepository.update(cartInfo.id, { notes: notes });
            return cart;
        } catch (error) {
            throw error;
        }
    }
    async removeNotes(userId) {
        try {
            const cartInfo = await CartRepository.getCart(userId);
            if (!cartInfo) {
                throw new ApiError(httpStatus.notFound, 'cart not found');
            }
            const cart = await CartRepository.update(cartInfo.id, { notes: '' });
            return cart;
        } catch (error) {
            throw error;
        }
    }
}
export default CartService;
