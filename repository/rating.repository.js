import RatingModel from '../model/rating.model.js';

const RatingRepository = {
    createRating: async data => {
        try {
            const rating = await RatingModel.create(data);
            return rating;
        } catch (error) {
            throw error;
        }
    },
    deleteRating: async id => {
        try {
            const rating = await RatingModel.findByIdAndDelete(id);
            return rating;
        } catch (error) {
            throw error;
        }
    },
    getRatingByService: async serviceId => {
        try {
            const rating = await RatingModel.find({ serviceId: serviceId })
                .populate({
                    path: 'userId',
                    select: 'name email avatar -_id',
                })
                .select('-serviceId -updatedAt');
            return rating;
        } catch (error) {
            throw error;
        }
    },

    findOne: async (userId, serviceId) => {
        try {
            const rating = await RatingModel.findOne({ userId: userId, serviceId: serviceId });
            return rating;
        } catch (error) {
            throw error;
        }
    },
};
export default RatingRepository;
