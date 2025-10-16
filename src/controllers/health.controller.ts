import { Request, Response } from 'express';
import { BadRequestException } from '../helpers/exceptions/bad-request.exception';

export const healthCheck = async (req: Request, res: Response) => {
    throw new BadRequestException('Simulated failurE');

    res.status(200).json({ status: 'ok', message: 'Jenny API is SUPER DUPER healthy!' });
};
