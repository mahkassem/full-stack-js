import { json } from 'body-parser';
import express from 'express';
import router from './router';

const port = 3000;
const app = express();

app.use(json());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

export default app;