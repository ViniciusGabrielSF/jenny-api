import { HttpException } from './http.exception';

export class InternalServerErrorException extends HttpException {
    constructor(message = 'Internal Server Error') {
        super(500, message);
    }
}
