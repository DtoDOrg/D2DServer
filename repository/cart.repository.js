import CartModel from '../model/cart.model.js';

const CartRepository = {
    getCart: async userId => {
        try {
            const cart = await CartModel.findOne({ userId: userId })
                .where({ orderPlaced: false })
                .populate({ path: 'services.service', select: '-updatedAt -createdAt -description -steps  -status -warranty' });

            return cart;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    create: async data => {
        try {
            const cart = await CartModel.create(data);
            return cart;
        } catch (error) {
            console.log('**********', error);
            throw error;
        }
    },

    update: async (id, data) => {
        try {
            console.log(id);
            const cart = await CartModel.findByIdAndUpdate(id, data);
            return cart;
        } catch (error) {
            throw error;
        }
    },

    delete: async id => {
        try {
            const cart = await CartModel.findByIdAndDelete(id);
            return cart;
        } catch (error) {
            throw error;
        }
    },
};

export default CartRepository;
