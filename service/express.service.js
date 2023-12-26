import express from "express";
import cors from "cors";
import { OtpRouter } from "../routes/otp.route.js";
import { CONFIG } from "../config/config.js";
const PORT = CONFIG.PORT
export const startServer = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use('/otp', OtpRouter)
  app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}`)
  })
}