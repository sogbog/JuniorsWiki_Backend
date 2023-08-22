import { Router } from "express";
import { SessionController } from "../controllers/session";


const sessionRoutes = Router()
const sessionController = new SessionController()

sessionRoutes.post("/", (req, res) => sessionController.create(req, res))

module.exports = sessionRoutes;