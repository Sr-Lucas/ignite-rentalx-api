import express from "express";
import swagger from "swagger-ui-express";

import "./database";
import "./shared/container";

import { router } from "./routes";
import swaggerSetupFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use(router);
app.use("/api-docs", swagger.serve, swagger.setup(swaggerSetupFile));

app.listen(3333, () => console.log("Server is running!"));
