import { Express, Router } from "express";
import {
  authorizedMiddleware,
  isAdmin,
} from "../../middleware/authorized.middleware";
import { AdminUserController } from "../../controllers/admin/user.controller";

const adminRouter = Router();
const adminController = new AdminUserController();

adminRouter.post("/create", authorizedMiddleware, adminController.createUser);

export default adminRouter;
