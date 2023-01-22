import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const mail = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: Number(process.env.MAIL_PORT),
	secure: false,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
});
