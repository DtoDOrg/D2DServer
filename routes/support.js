import express from "express";
import {
  createSupport,
  getSupport,
  getSupportById,
} from "../controller/support.js";
const router = express.Router();
//create
router.post("/", createSupport);
//get all
router.get("/", getSupport);
//get by id
router.get("/:id", getSupportById);
export { router as SupportRouter };
