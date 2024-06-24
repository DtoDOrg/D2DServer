import ServiceModel from "../model/services.model.js";

class ServicesRepository {
  //add a service
  async addService(data) {
    try {
      const service = await ServiceModel.create(data);
      return service;
    } catch (error) {
      throw error;
    }
  }

  //delete service
  async deleteService(id) {
    try {
      const service = await ServiceModel.findByIdAndDelete(id);
      return service;
    } catch (error) {
      throw error;
    }
  }

  //update service
  async updateService(id, data) {
    try {
      const service = await ServiceModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return service;
    } catch (error) {
      throw error;
    }
  }

  //get service by shop Id
  async getServiceByShopId(shopId) {
    try {
      const service = await ServiceModel.find({ shopId });
      return service;
    } catch (error) {
      throw error;
    }
  }

  //get service by service Id
  async getServiceByServiceId(serviceId) {
    try {
      const service = await ServiceModel.findById(serviceId);
      return service;
    } catch (error) {
      throw error;
    }
  }

  //extra - get service by category
  async getServiceByCategory(categoryId) {
    try {
      const services = await ServiceModel.find({ category: categoryId });
      return service;
    } catch (error) {
      throw error;
    }
  }
}

export default ServicesRepository;
