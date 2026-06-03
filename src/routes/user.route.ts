import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const userController = new UserController();
const router = Router();

router.post("/register", userController.createUser);
router.post("/login", userController.loginUSer);

export default router;
