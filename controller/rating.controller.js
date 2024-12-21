import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import RatingService from '../service/rating.service.js';

const service = new RatingService();
export const create = async (req, res, next) => {
    try {
        const data = {
            userId: req.user.id,
            ...req.body,
        };
        const rating = await service.createRating(data);
        res.status(httpStatus.created).json(FormattedData(true, rating, 'rating created'));
    } catch (error) {
        next(error);
    }
};
export const deleteRating = async (req, res, next) => {
    try {
        const rating = await service.deleteRating(req.params.id);
        res.status(201).json(FormattedData(true, rating, 'rating deleted'));
    } catch (error) {
        next(error);
    }
};
export const getRatingByService = async (req, res, next) => {
    try {
        const rating = await service.getRatingByService(req.params.id);
        res.status(200).json(FormattedData(true, rating, 'rating fetched'));
    } catch (error) {
        next(error);
    }
};
