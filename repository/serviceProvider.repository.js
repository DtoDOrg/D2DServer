import ServiceProviderModel from '../model/serviceProvider.model.js';

const ServiceProviderRepository = {
    getAll: async () => {
        try {
            const result = await ServiceProviderModel.find();
            return result;
        } catch (error) {
            throw error;
        }
    },
    create: async data => {
        try {
            const result = await ServiceProviderModel.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, data) => {
        try {
            const result = await ServiceProviderModel.findByIdAndUpdate(id, data, { new: true });
            return result;
        } catch (error) {
            throw error;
        }
    },
    delete: async id => {
        try {
            const result = await ServiceProviderModel.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
    findByEmail: async email => {
        try {
            const result = await ServiceProviderModel.findOne({ email: email });
            return result;
        } catch (error) {
            throw error;
        }
    },
    findById: async id => {
        try {
            const result = await ServiceProviderModel.findById(id).populate({ path: 'wallet', select: 'balance' });
            return result;
        } catch (error) {
            throw error;
        }
    },
};

export default ServiceProviderRepository;
