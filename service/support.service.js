import ApiError, { HTTPSTATUS } from "../middleware/error.js";
import SupportRepository from "../repository/support.js";

class SupportService {
  constructor() {
    this.supportRepository = new SupportRepository();
  }
  //create

  async createSupport(data) {
    try {
      const response = await this.supportRepository.create(data);
      return response;
    } catch (error) {
      throw new ApiError(HTTPSTATUS.BADREQUEST, error.message);
    }
  }

  //get
  async getAllSupports() {
    try {
      const response = await this.supportRepository.get();
      return response;
    } catch (error) {
      throw new ApiError(HTTPSTATUS.BADREQUEST, error.message);
    }
  }
  //get Support by id

  async getSupportById(id) {
    try {
      const response = await this.supportRepository.findByUserId(id);
      return response;
    } catch (error) {
      throw new ApiError(HTTPSTATUS.BADREQUEST, error.message);
    }
  }
}
export default SupportService;
