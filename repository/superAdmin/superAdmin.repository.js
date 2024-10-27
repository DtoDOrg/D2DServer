import SuperAdminModel from '../../model/superAdmin.model.js';

const superAdminRepository = {
    //create super admin
    create: async data => {
        try {
            const result = await SuperAdminModel.create(data).select('-password');
            return result;
        } catch (error) {
            throw error;
        }
    },
    //update super admin
    update: async (id, data) => {
        try {
            const result = await SuperAdminModel.findByIdAndUpdate(id, data, {
                new: true,
            }).select('-password');
            return result;
        } catch (error) {
            throw error;
        }
    },
    //get by email
    getByEmail: async email => {
        try {
            const result = await SuperAdminModel.findOne({ email: email });
            return result;
        } catch (error) {
            throw error;
        }
    },
    //get by Id
    getById: async id => {
        try {
            const result = await SuperAdminModel.findById(id).select('-password');
            return result;
        } catch (error) {
            throw error;
        }
    },
    //get all
    getAll: async () => {
        try {
            const result = await SuperAdminModel.find().select('-password');
            return result;
        } catch (error) {
            throw error;
        }
    },
    //delete by Id
    deleteById: async id => {
        try {
            const result = await SuperAdminModel.findByIdAndDelete(id).select('-password');
            return result;
        } catch (error) {
            throw error;
        }
    },
};
export default superAdminRepository;
