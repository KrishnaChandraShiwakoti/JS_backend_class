import { Router } from "express";
import { PersonController } from "../controllers/person.controller";
const personController = new PersonController();

const router = Router();
router.get("/", personController.getAllPerson);
router.get("/:id", personController.getPersonById);
router.post("/", personController.createPerson);
router.put("/:id", personController.updatePerson);
router.delete("/:id", personController.deletePerson);

export default router;
