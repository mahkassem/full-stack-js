import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.query;

    if (id === '1') {
        return next();
    }

    res.send('id is not 1').status(400);
    return;
}

export { authMiddleware }