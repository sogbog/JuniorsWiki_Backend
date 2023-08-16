import { Router } from "express"
import { TechController } from "../controllers/tech";


const techRoutes: Router = Router();
const techController = new TechController();


techRoutes.get("/", (req, res) => techController.index(req, res))
techRoutes.post("/", (req, res) => techController.create(req, res));
techRoutes.put("/:name", (req, res) => techController.update(req, res))
techRoutes.get("/:name", (req, res) => techController.show(req, res))
techRoutes.delete("/:name", (req, res) => techController.delete(req, res))

module.exports = techRoutes;