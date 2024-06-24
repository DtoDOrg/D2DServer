import { FormattedData } from "../helper/formattedResponse.js";
import { ImageUploader } from "../helper/imageUploader.js";
import ApiError, { HTTPSTATUS } from "../middleware/error.js";
import CategoryService from "../service/category.service.js";

const categoryService = new CategoryService();

//create
export const create = async (req, res, next) => {
  try {
    const imageUrl = await ImageUploader(req.file, "category");
    const data = {
      name: req.body.name,
      description: req.body.description,
      image: imageUrl,
    };
    const category = await categoryService.createCategory(data);
    res
      .status(HTTPSTATUS.CREATED)
      .json(FormattedData(true, category, "category created"));
  } catch (error) {
    next(error);
  }
};
//get
export const getAll = async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    return res
      .status(HTTPSTATUS.SUCCESS)
      .json(FormattedData(true, categories, "categories found"));
  } catch (error) {
    next(error);
  }
};
//delete
export const deleteCategory = async (req, res, next) => {
  try {
    const category = await categoryService.deleteCategory(req.params.id);
    return res
      .status(HTTPSTATUS.SUCCESS)
      .json(FormattedData(true, category, "category deleted"));
  } catch (error) {
    next(error);
  }
};
