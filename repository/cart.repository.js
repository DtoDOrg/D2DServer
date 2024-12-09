import CartModel from '../model/cart.model.js';

const CartRepository = {
    getCart: async userId => {
        try {
            const cart = await CartModel.findOne({ userId: userId });
            return cart;
        } catch (error) {
            throw error;
        }
    },

    create: async data => {
        try {
            const cart = await CartModel.create(data);
            return cart;
        } catch (error) {
            throw error;
        }
    },

    update: async (id, data) => {
        try {
            const cart = await CartModel.findByIdAndUpdate(id, data);
            return cart;
        } catch (error) {
            throw error;
        }
    },

    delete: async id => {
        try {
            const cart = await CartModel.findByIdAndDelete(id);
            console.log(cart);
            return cart;
        } catch (error) {
            throw error;
        }
    },
};

export default CartRepository;
