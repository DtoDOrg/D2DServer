import ApiError, { httpStatus } from '../middleware/error';
import CartRepository from '../repository/cart.repository';
import CouponRepository from '../repository/coupon.repository';

class CouponService {
    async createCoupon(data) {
        try {
            const coupon = await CouponRepository.create(data);
            return coupon;
        } catch (error) {
            throw error;
        }
    }

    async getAllCoupon() {
        try {
            const coupon = await CouponRepository.getAll();
            return coupon;
        } catch (error) {
            throw error;
        }
    }

    async getOneCoupon(id) {
        try {
            const coupon = await CouponRepository.getOne(id);
            return coupon;
        } catch (error) {
            throw error;
        }
    }

    async deleteCoupon(id) {
        try {
            const coupon = await CouponRepository.delete(id);
            return coupon;
        } catch (error) {
            throw error;
        }
    }
    async getByCode(code) {
        try {
            const coupon = await CouponRepository.getByCode(code);
            return coupon;
        } catch (error) {
            throw error;
        }
    }
    async applyCoupon(userId, code) {
        try {
            const cartInfo = await CartRepository.getCart(userId);
            if (!cartInfo) {
                throw new ApiError(httpStatus.notFound, 'cart not found');
            }
            const couponInfo = await CouponRepository.getByCode(code);
            if (!couponInfo) {
                throw new ApiError(httpStatus.notFound, 'coupon not found');
            }
            const netPrice = cartInfo.total;
            if (netPrice < couponInfo.minAmount) {
                throw new ApiError(httpStatus.notFound, 'minimum amount not met');
            }
            if (couponInfo.couponType === 'fixed') {
                cartInfo.discount = couponInfo.discount;
                cartInfo.total = netPrice - cartInfo.discount;
            } else {
                cartInfo.discount = netPrice * (couponInfo.discount / 100);
            }

            return coupon;
        } catch (error) {
            throw error;
        }
    }
}

export default CouponService;
