import express from "express";
import cors from "cors";
import { OtpRouter } from "../routes/otp.route.js";
import { CONFIG } from "../config/config.js";
import { UserRouter } from "../routes/user.route.js";
import { errorHandler } from "../middleware/error.js";
const PORT = CONFIG.PORT;
export const startServer = (app) => {
  app.use(cors());
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("D2D server health is good");
  });
  app.use("/otp", OtpRouter);
  app.use("/users", UserRouter);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}`);
  });
};
