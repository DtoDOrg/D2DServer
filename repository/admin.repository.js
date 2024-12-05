import AdminModel from '../model/admin.model.js';

const AdminRepository = {
    create: async data => {
        try {
            const admin = await AdminModel.create(data);
            return admin;
        } catch (error) {
            throw error;
        }
    },

    getById: async id => {
        try {
            const admin = await AdminModel.findById(id);

            return admin;
        } catch (error) {
            throw error;
        }
    },
    getByEmail: async email => {
        try {
            const admin = await AdminModel.findOne({ email });

            return admin;
        } catch (error) {
            throw error;
        }
    },
    getAll: async () => {
        try {
            const admins = await AdminModel.find();
            return admins;
        } catch (error) {
            throw error;
        }
    },
    delete: async id => {
        try {
            const admin = await AdminModel.findByIdAndDelete(id);
            return admin;
        } catch (error) {
            throw error;
        }
    },
};
export default AdminRepository;
