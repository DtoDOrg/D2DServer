import ApiError, { httpStatus } from '../middleware/error.js';
import ServicesRepository from '../repository/services.js';

class Services {
    constructor() {
        this.serviceRepository = new ServicesRepository();
    }

    //create service
    async createService(data) {
        try {
            const service = await this.serviceRepository.addService(data);
            return service;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }

    //update service
    async updateService(id, data) {
        try {
            const service = this.serviceRepository.updateService(id, data);
            return service;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
    //delete a service
    async deleteService(id) {
        try {
            const service = this.serviceRepository.deleteService(id);
            return service;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
    //get service by shop
    async getServiceByShop(shopId) {
        try {
            const services = await this.serviceRepository.getServiceByShopId(shopId);
            return services;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
    //get service by service ID
    async getServiceByServiceId(serviceId) {
        try {
            const service = await this.serviceRepository.getServiceByServiceId(serviceId);
            return service;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
    //get service by category ID
    async getServiceByCategory(categoryId) {
        try {
            const service = await this.serviceRepository.getServiceByCategory(categoryId);
            return service;
        } catch (error) {
            throw new ApiError(httpStatus.badRequest, error.message);
        }
    }
}
export default Services;
