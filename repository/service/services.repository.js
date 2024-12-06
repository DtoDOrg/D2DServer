import ServiceModel from '../../model/services.model.js';

const serviceRepository = {
    //add service
    addService: async data => {
        try {
            const service = await ServiceModel.create(data);
            return service;
        } catch (error) {
            throw error;
        }
    },
    //update service
    updateService: async (id, data) => {
        try {
            const service = await ServiceModel.findByIdAndUpdate(id, data, {
                new: true,
            });
            return service;
        } catch (error) {
            throw error;
        }
    },
    //get service
    getAllService: async () => {
        try {
            const service = await ServiceModel.find();
            return service;
        } catch (error) {
            throw error;
        }
    },
    //get service by id
    getServiceById: async id => {
        try {
            const service = await ServiceModel.findById(id).populate('category');
            return service;
        } catch (error) {
            throw error;
        }
    },
    //get service by categoryId
    getServiceByCategory: async id => {
        try {
            const service = await ServiceModel.find({ category: id });
            return service;
        } catch (error) {
            throw error;
        }
    },
    //delete service
    deleteService: async id => {
        try {
            const service = await ServiceModel.findByIdAndDelete(id);
            return service;
        } catch (error) {
            throw error;
        }
    },
};
export default serviceRepository;
