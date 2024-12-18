import SupportModel from '../model/support.model.js';

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

    async getAll() {
        try {
            const supports = await SupportModel.find().populate({ path: 'userId', select: 'name email avatar' });
            return supports;
        } catch (error) {
            throw error;
        }
    }
    //   find by userId
    async findByUserId(userId) {
        try {
            const support = await SupportModel.findOne({ userId }).populate({ path: 'userId', select: 'name email avatar' });
            return support;
        } catch (error) {
            throw error;
        }
    }
}
export default SupportRepository;
