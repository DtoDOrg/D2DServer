import CouponModel from '../model/coupon.model';

const CouponRepository = {
    create: async data => {
        try {
            const cart = await CouponModel.create(data);
            return cart;
        } catch (error) {
            throw error;
        }
    },
    delete: async id => {
        try {
            const cart = await CouponModel.findByIdAndDelete(id);
            return cart;
        } catch (error) {
            throw error;
        }
    },
    getAll: async () => {
        try {
            const cart = await CouponModel.find();
            return cart;
        } catch (error) {
            throw error;
        }
    },
    getOne: async id => {
        try {
            const cart = await CouponModel.findById(id);
            return cart;
        } catch (error) {
            throw error;
        }
    },
    getByCode: async code => {
        try {
            const cart = await CouponModel.findOne({ code: code });
            return cart;
        } catch (error) {
            throw error;
        }
    },
};

export default CouponRepository;
