import ApiError, { HTTPSTATUS } from "../middleware/error.js";
import CategoryRepository from "../repository/category.js";

class CategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  //create categories

  async createCategory(data) {
    try {
      return await this.categoryRepository.create(data);
    } catch (error) {
      throw new ApiError(
        HTTPSTATUS.BADREQUEST,
        error.message || "something went wrong"
      );
    }
  }

  //get all categories
  async getAllCategories() {
    try {
      return await this.categoryRepository.getAll();
    } catch (error) {
      throw new ApiError(HTTPSTATUS.BADREQUEST, error.message);
    }
  }

  //delete category
  async deleteCategory(categoryId) {
    try {
      const res = await this.categoryRepository.delete(categoryId);
      return res;
    } catch (error) {
      throw new ApiError(HTTPSTATUS.BADREQUEST, error.message);
    }
  }
}
export default CategoryService;
