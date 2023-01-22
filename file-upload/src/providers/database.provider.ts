import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
	host: "localhost",
	user: "postgres",
	password: process.env.DB_PASSWORD,
	database: "postgres",
	port: 5432,
});

export default pool;
