import CategoryModel from '../../model/category.model.js';

const categoryRepository = {
    //create
    create: async data => {
        try {
            const category = await CategoryModel.create(data);
            return category;
        } catch (error) {
            throw error;
        }
    },
    //update by id
    update: async (id, data) => {
        try {
            const category = await CategoryModel.findByIdAndUpdate(id, data, {
                new: true,
            });
            return category;
        } catch (error) {
            throw error;
        }
    },
    //delete by id
    delete: async id => {
        try {
            const category = await CategoryModel.findByIdAndDelete(id);
            return category;
        } catch (error) {
            throw error;
        }
    },
    //get all
    getAll: async () => {
        try {
            const categories = await CategoryModel.find();
            return categories;
        } catch (error) {
            throw error;
        }
    },
    //get by id
    getById: async id => {
        try {
            const category = await CategoryModel.findById(id).populate('services');
            return category;
        } catch (error) {
            throw error;
        }
    },
};
export default categoryRepository;
