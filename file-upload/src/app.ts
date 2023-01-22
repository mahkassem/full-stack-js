import { json, urlencoded } from "body-parser";
import express from "express";
import fileUpload from "express-fileupload";
import router from "./router";

const port = 4000;
const app = express();

// app server static files
app.use(express.static("public"));
app.use(json(), urlencoded());
app.use(
	fileUpload({
		createParentPath: true,
		tempFileDir: "/tmp/",
	}),
);

app.use("/api", router);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
