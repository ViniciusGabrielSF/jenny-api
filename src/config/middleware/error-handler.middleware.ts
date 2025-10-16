import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../helpers/exceptions/http.exception';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction) {
    console.error(`[Error] ${err.message}`);

    if (err instanceof HttpException) {
        return res.status(err.status).json({
            status: err.status || 500,
            message: err.message || 'Internal server error',
        });
    }

    // fallback for unexpected errors
    return res.status(500).json({
        status: 500,
        message: 'Internal server error',
    });
}
