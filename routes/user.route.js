import express from "express";
import {
  getAllUsers,
  login,
  registration,
  verifyRegistration,
} from "../controller/user.js";
import {
  loginValidation,
  registrationValidation,
} from "../middleware/reqValidation.js";
const router = express.Router();
//create user
router.post("/", registrationValidation, registration);
//get all users
router.get("/", getAllUsers);
//verify registration
router.get("/verify-registration/:token", verifyRegistration);
//login
router.post("/login", loginValidation, login);
//delete by id
router.delete("/:id");
//get by id

router.get("/:id");
export { router as UserRouter };
