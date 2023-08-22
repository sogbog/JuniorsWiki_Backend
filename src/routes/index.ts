import { Router } from "express";

//const { router } = require("express");

const userRoutes = require("./user.routes");
const techRoutes = require("./techs.routes");
const sessionRoutes = require("./session.routes")

const routes: Router = Router();

routes.use("/users", userRoutes);
routes.use("/techs", techRoutes);
routes.use("/session", sessionRoutes)

module.exports = routes;