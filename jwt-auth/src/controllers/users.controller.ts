import { Request, Response } from "express";
import { getUsers, createUser, User } from "../models/users.model";
import bcrypt from "bcrypt";

const getAllUsersHanlder = async (req: Request, res: Response) => {
	const data = await getUsers();
	res.send(data);
};

const createUserHanlder = async (req: Request, res: Response) => {
	const user = req.body as unknown as User;
	user.password = await bcrypt.hash(user.password + process.env.APP_SECRET, 10);
	const data = await createUser(user);
	res.send(data);
};

export { getAllUsersHanlder, createUserHanlder };
