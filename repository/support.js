import SupportModel from "../model/support.model.js";

class SupportRepository {
  async create(data) {
    try {
      const support = await SupportModel.create(data);
      return support;
    } catch (error) {
      throw error;
    }
  }
  //find all

  async findAll() {
    try {
      const supports = await SupportModel.find();
      return supports;
    } catch (error) {
      throw error;
    }
  }
  //   find by userId
  async findByUserId(userId) {
    try {
      const support = await SupportModel.findOne({ userId });
      return support;
    } catch (error) {
      throw error;
    }
  }
}
export default SupportRepository;
