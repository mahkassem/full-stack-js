import { Router, Request, Response } from 'express';

const appRouter = Router();

appRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export default appRouter;