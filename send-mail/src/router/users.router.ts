import { Router } from "express";
import {
	createUserHanlder,
	getAllUsersHanlder,
} from "../controllers/users.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const usersRouter = Router();

usersRouter.get("/", authMiddleware, getAllUsersHanlder);
usersRouter.post("/", authMiddleware, createUserHanlder);

export default usersRouter;
