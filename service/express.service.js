import express from "express";
import cors from "cors";
import { CONFIG } from "../config/config.js";
import { UserRouter } from "../routes/user.route.js";
import { errorHandler } from "../middleware/error.js";
import { CategoryRouter } from "../routes/category.route.js";
import { SupportRouter } from "../routes/support.js";
import { ShopRouter } from "../routes/shop.route.js";
import { serviceRouter } from "../routes/service.route.js";
const PORT = CONFIG.PORT;
export const startServer = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use("/category", CategoryRouter);
  app.use("/users", UserRouter);
  app.use("/support", SupportRouter);
  app.use("/shop", ShopRouter);
  app.use("/service", serviceRouter);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}`);
  });
};
