import CartModel from "../model/cart.model";

class CartRepository {
  //get cart by user id
  async getCart(userId) {
    try {
      const cart = await CartModel.findOne({ userId: userId });
      return cart;
    } catch (error) {
      throw error;
    }
  }
}
