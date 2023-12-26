import express from "express";
import { DbConnection } from "./service/database.service.js";
import { startServer } from "./service/express.service.js";
const app = express();
DbConnection();
startServer(app);



