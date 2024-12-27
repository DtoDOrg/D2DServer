import ApiError, { httpStatus } from '../middleware/error.js';
import SupportRepository from '../repository/support.js';

class SupportService {
    constructor() {
        this.supportRepository = new SupportRepository();
    }
    //create

    async createSupport(data) {
        try {
            const response = await this.supportRepository.create(data);
            return response;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }

    //get
    async getAllSupports() {
        try {
            const response = await this.supportRepository.getAll();
            return response;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
    //get Support by id

    async getSupportById(id) {
        try {
            const response = await this.supportRepository.findByUserId(id);
            return response;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
}
export default SupportService;
