import { Router } from 'express';
import { getAllUsers } from '../controllers/users.handler';
import { authMiddleware } from '../middlewares/auth.middleware';

const usersRouter = Router();

usersRouter.get('/', authMiddleware, getAllUsers);

export default usersRouter;