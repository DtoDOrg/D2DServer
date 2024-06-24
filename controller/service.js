import { FormattedData } from "../helper/formattedResponse.js";
import { ImageDeleter } from "../helper/imageDeleter.js";
import { ImageUploader } from "../helper/imageUploader.js";
import { HTTPSTATUS } from "../middleware/error.js";
import Services from "../service/services.service.js";

const services = new Services();
//create
export const createService = async (req, res, next) => {
  let imageUrl = "";
  try {
    imageUrl = await ImageUploader(req.file, "service");
    const data = {
      image: imageUrl,
      ...req.body,
    };
    const service = await services.createService(data);
    res
      .status(HTTPSTATUS.CREATED)
      .json(FormattedData(true, service, "service created"));
  } catch (error) {
    await ImageDeleter(imageUrl);
    next(error);
  }
};

//delete
export const deleteService = async (req, res, next) => {
  try {
    const result = await services.deleteService(req.params.id);
    res
      .status(HTTPSTATUS.SUCCESS)
      .json(FormattedData(true, result, "service deleted"));
  } catch (error) {
    next(error);
  }
};
//get service by shopId

export const getByShopId = async (req, res, next) => {
  try {
    const results = await services.getServiceByShop(req.params.id);
    return res
      .status(HTTPSTATUS.SUCCESS)
      .json(FormattedData(true, results, `service by ${req.params.id}`));
  } catch (error) {
    next(error);
  }
};

//get service service id
export const getServiceById = async (req, res, next) => {
  try {
    const results = await services.getServiceByServiceId(req.params.id);
    res
      .status(HTTPSTATUS.SUCCESS)
      .json(FormattedData(true, results, `service by ${req.params.id}`));
  } catch (error) {
    next(error);
  }
};
