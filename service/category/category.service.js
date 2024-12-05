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
            return category;
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
    // add service to category
    async addServiceToCategory(id, serviceId) {
        try {
            const category = await this.getCategoryById(id);
            if (!category) {
                throw new ApiError(httpStatus.badRequest, 'category not found');
            }
            const services = category.services;
            if (!services.includes(serviceId)) {
                if (services.length >= 20) {
                    throw new ApiError(httpStatus.badRequest, 'maximum 10 services can be added in a category');
                }
                services.push(serviceId);
                await category.save();
                return category;
            }
            throw new ApiError(httpStatus.badRequest, 'service already added in category');
        } catch (error) {
            throw error;
        }
    }
    async removeServiceFromCategory(id, serviceId) {
        try {
            const category = await this.getCategoryById(id);
            if (!category) {
                throw new ApiError(httpStatus.badRequest, 'category not found');
            }
            const services = category.services;
            if (services.includes(serviceId)) {
                const index = services.indexOf(serviceId);
                services.splice(index, 1);
                await category.save();
                return category;
            }
            throw new ApiError(httpStatus.badRequest, 'service not found in category');
        } catch (error) {
            throw error;
        }
    }
}
export default CategoryService;
