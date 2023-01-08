import { Router } from 'express';
import { createUserHanlder, getAllUsersHanlder } from '../controllers/users.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const usersRouter = Router();

usersRouter.get('/', getAllUsersHanlder);
usersRouter.post('/', createUserHanlder);

export default usersRouter;