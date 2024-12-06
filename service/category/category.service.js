import ApiError, { httpStatus } from '../../middleware/error.js';
import categoryRepository from '../../repository/category/category.repository.js';

class CategoryService {
    async createCategory(data) {
        try {
            const category = await categoryRepository.create(data);
            return category;
        } catch (error) {
            throw error;
        }
    }
    // get all categories
    async getAllCategories() {
        try {
            return await categoryRepository.getAll();
        } catch (error) {
            throw error;
        }
    }
    // delete category
    async deleteCategory(categoryId) {
        try {
            const res = await categoryRepository.delete(categoryId);
            return res;
        } catch (error) {
            throw error;
        }
    }
    //get category by id
    async getCategoryById(id) {
        try {
            const category = await categoryRepository.getById(id);
            if (category) {
                return category;
            }
            throw new ApiError(httpStatus.badRequest, 'category not found');
        } catch (error) {
            throw error;
        }
    }
    //update category
    async updateCategory(id, data) {
        try {
            const category = await categoryRepository.update(id, data);
            return category;
        } catch (error) {
            throw error;
        }
    }
}
export default CategoryService;
