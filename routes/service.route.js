import express, { Router } from "express";
import {
  createService,
  deleteService,
  getByShopId,
  getServiceById,
} from "../controller/service.js";
import { uploader } from "../middleware/multer.js";
const router = express.Router();
router.post("/", uploader("image"), createService);
router.delete("/:id", deleteService);
router.get("/shop/:id", getByShopId);
router.get("/:id", getServiceById);
export { router as serviceRouter };
