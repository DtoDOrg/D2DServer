import serviceRepository from '../../repository/service/services.repository.js';

class ServicesClass {
    //create
    async create(data) {
        try {
            const service = await serviceRepository.addService(data);
            return service;
        } catch (error) {
            throw error;
        }
    }

    //update a service
    async updateService(id, data) {
        try {
            const service = await serviceRepository.updateService(id, data);
            return service;
        } catch (error) {
            throw error;
        }
    }
    //delete a service
    async deleteService(id) {
        try {
            const service = await serviceRepository.deleteService(id);
            return service;
        } catch (error) {
            throw error;
        }
    }

    //get service by service ID
    async getServiceByServiceId(serviceId) {
        try {
            const service = await serviceRepository.getServiceById(serviceId);
            return service;
        } catch (error) {
            throw error;
        }
    }
    //get top rated services
    async getTopRatedServices() {
        try {
            const service = await serviceRepository.getPopularServices();
            return service;
        } catch (error) {
            throw error;
        }
    }
    //get recent services
    async getRecentServices() {
        try {
            const service = await serviceRepository.getRecentServices();
            return service;
        } catch (error) {
            throw error;
        }
    }

    //get service by category ID
    async getServiceByCategory(categoryId) {
        try {
            const service = await serviceRepository.getServiceByCategory(categoryId);
            return service;
        } catch (error) {
            throw error;
        }
    }
    //get all service
    async getAllService() {
        try {
            const service = await serviceRepository.getAllService();
            return service;
        } catch (error) {
            throw error;
        }
    }
}
export default ServicesClass;
