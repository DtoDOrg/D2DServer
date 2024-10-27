import mongoose from 'mongoose';
import ApiError, { httpStatus } from '../../middleware/error.js';
import stateRepository from '../../repository/address/state.repository.js';

class SateService {
    //create
    async createState(data) {
        try {
            const state = await stateRepository.create(data);
            return state;
        } catch (error) {
            throw error;
        }
    }
    //update
    async updateState(id, name) {
        try {
            const state = await stateRepository.update(id, name);
            if (!state) {
                throw new ApiError(httpStatus.notFound, 'state not found');
            }
            return state;
        } catch (error) {
            throw error;
        }
    }
    //add city
    async addCityInAState(id, cityId) {
        try {
            const result = await this.getStateById(id);
            console.log(result);
            if (!result) {
                throw new ApiError(httpStatus.notFound, 'state not found');
            }
            if (result.cities.includes(cityId)) {
                throw new ApiError(httpStatus.badRequest, 'city already added in state');
            }
            result.cities.push(cityId);
            await result.save();
            return result;
        } catch (error) {
            throw error;
        }
    }

    //remove a city from a state
    async removeCityFromState(id, cityId) {
        try {
            const result = await this.getStateById(id);
            if (!result) {
                throw new ApiError(httpStatus.notFound, 'state not found');
            }
            if (!result.cities.includes(cityId)) {
                throw new ApiError(httpStatus.badRequest, 'city not found in state');
            }
            const index = result.cities.indexOf(cityId);
            result.cities.splice(index, 1);
            await result.save();
            return result;
        } catch (error) {
            throw error;
        }
    }
    //delete
    async deleteState(id) {
        try {
            const state = await stateRepository.deleteById(id);
            if (!state) {
                throw new ApiError(httpStatus.notFound, 'state not found');
            }
            return state;
        } catch (error) {
            throw error;
        }
    }
    //get all city
    async getAllStates() {
        try {
            const states = await stateRepository.findAll();
            return states;
        } catch (error) {
            throw error;
        }
    }
    //get by id
    async getStateById(id) {
        try {
            const city = await stateRepository.findById(id);
            return city;
        } catch (error) {
            throw error;
        }
    }
}
export default SateService;
