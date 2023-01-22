import { UploadedFile } from "express-fileupload";

export class FileService {
	static async upload(file: UploadedFile, path: string): Promise<string> {
		const storePath = `${path}/${file.name}`;
		await file.mv(`public/${storePath}`);
		return storePath;
	}
}
