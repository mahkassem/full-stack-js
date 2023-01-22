import { mail } from "../../providers/mail.provider";
import dotenv from "dotenv";
import fs from "fs";
import { resolve } from "path";

dotenv.config();

export interface MailRecipient {
	name: string;
	email: string;
}

export class MailService {
	public static async send(
		to: MailRecipient,
		subject: string,
		text: string,
		template?: string,
	) {
		let htmlTemplate = `<h1>${subject}</h1>\n<p>${text}</p>`;
		if (template) {
			htmlTemplate = this.processTemplate(template, subject, text);
		}
		await mail.sendMail({
			from: `${process.env.APP_NAME} <${process.env.MAIL_FROM}>`, // sender address
			to: `${to.name} <${to.email}>`, // recipient
			subject, // Subject line
			text, // plain text body
			html: htmlTemplate, // html body
		});
	}

	static processTemplate(
		template: string,
		subject: string,
		text: string,
	): string {
		let html = fs.readFileSync(
			resolve(__dirname, `templates/${template}.mail.template.html`),
			"utf8",
		);
		html = html.replace("{{subject}}", subject);
		html = html.replace("{{text}}", text);

		return html;
	}
}
