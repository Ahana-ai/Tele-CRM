import express from "express";
const router = express.Router();
import UserController from "../controllers/user-controller.js";

// Users ----->
router.post("/users", UserController.addUser);
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getDetails);

export default router;
