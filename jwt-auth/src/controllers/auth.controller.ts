import { Request, Response } from "express";
import { createUser, getUserByUsername, User } from "../models/users.model";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const signinUsersHanlder = async (req: Request, res: Response) => {
	try {
		const { username, password } = req.body;
		const user = await getUserByUsername(username);
		if (!user) throw new Error("User not found");

		const isPasswordMatch = await bcrypt.compare(
			password + process.env.APP_SECRET,
			user.password,
		);

		if (!isPasswordMatch) throw new Error("Invalid password");

		const tokenPayload = {
			sub: user.id,
			username: user.username,
		};

		const token = jwt.sign(tokenPayload, process.env.APP_SECRET as string, {
			expiresIn: "1d",
		});

		return res.send({ token });
	} catch (error: any) {
		return res.status(401).send(error.message);
	}
};

const registerUserHanlder = async (req: Request, res: Response) => {
	const user = req.body as unknown as User;
	user.password = await bcrypt.hash(user.password + process.env.APP_SECRET, 10);
	const data = await createUser(user);
	res.send(data);
};

export { signinUsersHanlder, registerUserHanlder };
