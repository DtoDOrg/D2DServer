import BannerModel from '../model/banner.model.js';

const BannerRepository = {
    getAll: async () => {
        try {
            const result = await BannerModel.find();
            return result;
        } catch (error) {
            throw error;
        }
    },
    getAllSingleBanner: async () => {
        try {
            const result = await BannerModel.find({ type: 'individual' }).select('-createdAt -updatedAt');
            return result;
        } catch (error) {
            throw error;
        }
    },
    getAllMultiBanner: async () => {
        try {
            const result = await BannerModel.find({ type: 'group' }).select('-createdAt -updatedAt');
            return result;
        } catch (error) {
            throw error;
        }
    },
    create: async data => {
        try {
            const result = await BannerModel.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, data) => {
        try {
            const result = await BannerModel.findByIdAndUpdate(id, data, {
                new: true,
            });
            return result;
        } catch (error) {
            throw error;
        }
    },
    delete: async id => {
        try {
            const result = await BannerModel.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
    getById: async id => {
        try {
            const result = await BannerModel.findById(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
};

export default BannerRepository;
