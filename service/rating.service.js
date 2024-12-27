import ApiError, { httpStatus } from '../middleware/error.js';
import RatingRepository from '../repository/rating.repository.js';

class RatingService {
    async getRatingByService(serviceId) {
        try {
            const rating = await RatingRepository.getRatingByService(serviceId);
            if (!rating) {
                throw new ApiError(httpStatus.notFound, 'rating not found');
            }

            const count = rating.length;
            const totalRating = rating.reduce((acc, item) => acc + item.rating, 0);
            const averageRating = totalRating / count;
            const data = {
                avgRating: !averageRating ? 0 : averageRating,
                allRatings: rating,
            };

            return data;
        } catch (error) {
            throw error;
        }
    }
    async createRating(data) {
        try {
            const review = await RatingRepository.findOne(data.userId, data.serviceId);
            if (review) {
                throw new ApiError(httpStatus.badRequest, 'rating already exists');
            }
            const rating = await RatingRepository.createRating(data);
            return rating;
        } catch (error) {
            throw error;
        }
    }
    async deleteRating(id) {
        try {
            const rating = await RatingRepository.deleteRating(id);
            return rating;
        } catch (error) {
            throw error;
        }
    }
}

export default RatingService;
