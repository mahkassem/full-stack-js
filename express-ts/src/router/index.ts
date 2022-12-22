import { Router } from 'express';
import appRouter from './app.routes';
import usersRouter from './users.router';

const router = Router();

router.use('/users', usersRouter);
router.use('/', appRouter);

export default router;