import { Router } from "express";

//const { router } = require("express");

const userRoutes = require("./user.routes");
const techRoutes = require("./techs.routes");


const routes: Router = Router();

routes.use("/users", userRoutes);
routes.use("/techs", techRoutes);

module.exports = routes;