import ApiError, { HTTPSTATUS } from "../middleware/error.js";
import ShopRepository from "../repository/shop.js";

class ShopService {
  constructor() {
    this.shopRepo = new ShopRepository();
  }

  //add shop
  async addShop(data) {
    try {
      const allShops = await this.shopRepo.getAll();
      allShops.map((shop) => {
        if (shop.name === data.name) {
          throw new ApiError(HTTPSTATUS.BADREQUEST, "name already exist");
        } else if (shop.email === data.email) {
          throw new ApiError(HTTPSTATUS.BADREQUEST, "email already exist");
        } else if (shop.phone === data.phone) {
          throw new ApiError(HTTPSTATUS.BADREQUEST, "phone already exist");
        }
      });

      const address = JSON.parse(data.address);
      data.address = address;
      data.city = data.city.toLowerCase().replace(/\s/g, "");
      const shop = await this.shopRepo.create(data);
      return shop;
    } catch (error) {
      throw new ApiError(400, error.message);
    }
  }

  //get all shops
  async getAllShops() {
    try {
      const shops = await this.shopRepo.getAll();
      return shops;
    } catch (error) {
      throw error;
    }
  }

  //get shop by id
  async getShopById(id) {
    try {
      const shop = await this.shopRepo.getById(id);
      if (!shop) {
        throw new ApiError(HTTPSTATUS.NOTFOUND, "shop not found");
      }
      return shop;
    } catch (error) {
      throw error;
    }
  }

  //get shop by city
  async getShopByCity(city) {
    try {
      const shop = await this.shopRepo.getByCity(city);
      return shop;
    } catch (error) {
      throw error;
    }
  }

  //update shop
  async updateShop(id, data) {
    try {
      const shop = await this.shopRepo.update(id, data);
      return shop;
    } catch (error) {
      throw error;
    }
  }

  //update status
  async updateStatus(id, status) {
    try {
      const shop = await this.shopRepo.updateStatus(id, status);
      if (!shop) {
        throw new ApiError(HTTPSTATUS.NOTFOUND, "shop not found");
      }
      return shop;
    } catch (error) {
      throw error;
    }
  }

  //delete shop
  async deleteShop(id) {
    try {
      const shop = await this.shopRepo.delete(id);
      if (!shop) {
        throw new ApiError(HTTPSTATUS.NOTFOUND, "shop not found");
      }
      return shop;
    } catch (error) {
      throw error;
    }
  }
}
export default ShopService;
