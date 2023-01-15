import { Router } from "express";
import {
	registerUserHanlder,
	signinUsersHanlder,
} from "../controllers/auth.controller";

const router = Router();

router.post("/signin", signinUsersHanlder);
router.post("/register", registerUserHanlder);

export default router;
