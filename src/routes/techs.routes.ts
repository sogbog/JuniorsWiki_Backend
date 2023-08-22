import { Router } from "express"
import { TechController } from "../controllers/tech";
import { isAdmin } from "../middlewares/isAdmin";

const techRoutes = Router();
const techController = new TechController();


techRoutes.get("/", (req, res) => techController.index(req, res))
techRoutes.post("/", isAdmin, (req, res) => techController.create(req, res));
techRoutes.put("/:name", isAdmin, (req, res) => techController.update(req, res))
techRoutes.get("/:name", (req, res) => techController.show(req, res))
techRoutes.delete("/:name", isAdmin, (req, res) => techController.delete(req, res))

module.exports = techRoutes;