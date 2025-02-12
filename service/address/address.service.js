import addressRepository from '../../repository/address/address.repository.js';
import ApiError, { httpStatus } from '../../middleware/error.js';

class AddressService {
    async createAddress(userId, street, landmark, city, state, zip) {
        const data = { userId, street, landmark, city, state, zip };
        try {
            const result = await addressRepository.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateAddress(id, data) {
        try {
            const result = await addressRepository.update(id, data);
            if (!result) {
                throw new ApiError(httpStatus.notFound, 'address not found');
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllAddress(userId) {
        try {
            const result = await addressRepository.getAll(userId);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAddressById(id) {
        try {
            const result = await addressRepository.getById(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteById(id) {
        try {
            const city = await addressRepository.delete(id);
            if (!city) {
                throw new ApiError(httpStatus.notFound, 'city not found');
            }
        } catch (error) {
            throw error;
        }
    }
}
export default AddressService;
