import CategoryModel from '../model/category.model.js';

class CategoryRepository {
    //create
    async create(data) {
        try {
            const category = await CategoryModel.create(data);
            return category;
        } catch (error) {
            throw error;
        }
    }

    //delete

    async delete(categoryId) {
        try {
            const res = await CategoryModel.findByIdAndDelete(categoryId);
            return res;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //get all
    async getAll() {
        try {
            const categories = await CategoryModel.find();
            return categories;
        } catch (error) {
            throw error;
        }
    }
    //get by id
    async getById(id) {
        try {
            const category = await CategoryModel.findById(id);
            return category;
        } catch (error) {
            throw error;
        }
    }
}
export default CategoryRepository;
