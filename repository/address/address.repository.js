import AddressModel from '../../model/address.model.js';

const addressRepository = {
    create: async data => {
        try {
            const result = await AddressModel.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
    getAll: async userId => {
        try {
            const result = await AddressModel.find({ userId: userId }).select('-createdAt -updatedAt').populate({ path: 'city state', select: 'name -_id' });
            return result;
        } catch (error) {
            throw error;
        }
    },
    getById: async id => {
        try {
            const result = await AddressModel.findById(id).populate({ path: 'city state', select: 'name -_id' });
            return result;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, data) => {
        try {
            const result = await AddressModel.findByIdAndUpdate(id, data, {
                new: true,
            });
            return result;
        } catch (error) {
            throw error;
        }
    },
    delete: async id => {
        try {
            const result = await AddressModel.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
};

export default addressRepository;
