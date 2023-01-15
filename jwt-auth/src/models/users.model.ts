import db from "../providers/database.provider";

export type User = {
	id?: number;
	name: string;
	username: string;
	password: string;
};

const getUserByUsername = async (username: string): Promise<User> => {
	const sql = "SELECT * FROM users WHERE username = $1";
	const result = await db.query(sql, [username]);
	return result.rows[0];
};

const getUsers = async (): Promise<User[]> => {
	const sql = "SELECT * FROM users";
	const result = await db.query(sql);
	return result.rows;
};

const createUser = async (user: User): Promise<User> => {
	const sql =
		"INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING *";
	const result = await db.query(sql, [user.name, user.username, user.password]);
	return result.rows[0];
};

export { getUsers, createUser, getUserByUsername };
