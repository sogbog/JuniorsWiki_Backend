import { Router } from "express"
import { UserController } from "../controllers/user";


const userRoutes: Router = Router();
const userController = new UserController();


userRoutes.post("/", (req, res) => userController.create(req, res));
userRoutes.delete("/:id", (req, res) => userController.delete(req, res));

module.exports = userRoutes;