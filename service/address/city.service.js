import cityRepository from '../../repository/address/city.repository.js';
import ApiError, { httpStatus } from '../../middleware/error.js';

class CityService {
    //create
    async createCity(name) {
        try {
            const city = await cityRepository.create(name);
            return city;
        } catch (error) {
            throw error;
        }
    }
    //update
    async updateCity(id, name) {
        try {
            const city = await cityRepository.update(id, name);
            if (!city) {
                throw new ApiError(httpStatus.notFound, 'city not found');
            }
            return city;
        } catch (error) {
            throw error;
        }
    }
    //delete
    async deleteCity(id) {
        try {
            const city = await cityRepository.delete(id);
            if (!city) {
                throw new ApiError(httpStatus.notFound, 'city not found');
            }
            return city;
        } catch (error) {
            throw error;
        }
    }
    //get all city
    async getAll() {
        try {
            const cities = await cityRepository.findAll();
            return cities;
        } catch (error) {
            throw error;
        }
    }
    //get by id
    async getById(id) {
        try {
            const city = await cityRepository.findById(id);
            return city;
        } catch (error) {
            throw error;
        }
    }
    async getByStateId(id) {
        try {
            const city = await cityRepository.findByStateId(id);
            return city;
        } catch (error) {
            throw error;
        }
    }
}
export default CityService;
