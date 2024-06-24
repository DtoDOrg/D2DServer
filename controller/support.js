import { FormattedData } from "../helper/formattedResponse.js";
import { HTTPSTATUS } from "../middleware/error.js";
import SupportService from "../service/support.service.js";

const supportService = new SupportService();
export const createSupport = (req, res, next) => {
  try {
    const support = supportService.createSupport(req.body);
    res
      .status(HTTPSTATUS.CREATED)
      .json(FormattedData(true, support, "support created"));
  } catch (error) {
    next(error);
  }
};
export const getSupport = (req, res, next) => {
  try {
    const support = supportService.getAllSupports();
    res
      .status(HTTPSTATUS.OK)
      .json(FormattedData(true, support, "support fetched"));
  } catch (error) {
    next(error);
  }
};
export const getSupportById = (req, res, next) => {
  try {
    const support = supportService.getSupportById(req.params.id);
    res
      .status(HTTPSTATUS.OK)
      .json(FormattedData(true, support, "support fetched"));
  } catch (error) {
    next(error);
  }
};
