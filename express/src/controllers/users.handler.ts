import { Request, Response } from 'express';

const getAllUsers = (req: Request, res: Response): void => {
    res.send([
        'user1',
        'user2',
    ]);
}

export { getAllUsers }