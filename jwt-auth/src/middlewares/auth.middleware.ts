import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getUserByUsername } from "../models/users.model";

dotenv.config();

const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const authToken = req.headers.authorization?.split(" ")[1]; // Bearer <token>

		if (!authToken) throw new Error("Missing token");

		const verifiedToken = jwt.verify(
			authToken,
			process.env.APP_SECRET as string,
		);

		if (!verifiedToken) throw new Error("Invalid token");

		const user = await getUserByUsername((verifiedToken as any).username);

		if (!user) throw new Error("Invalid token");

		// Add user to request
		res.locals.user = user;

		next();
	} catch (error: any) {
		res.status(401).json({ message: error?.message });
	}
};

export { authMiddleware };
