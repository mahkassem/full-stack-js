import { Router } from "express";
import appRouter from "./app.router";
import authRouter from "./auth.router";
import usersRouter from "./users.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/", appRouter);

export default router;
