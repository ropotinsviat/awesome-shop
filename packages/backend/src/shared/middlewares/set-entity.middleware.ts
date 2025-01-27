import { Response, NextFunction } from 'express';
import { RequestWithEntity } from '../types';

export function setEntityMiddleware(entity: string) {
	return (req: RequestWithEntity, _res: Response, next: NextFunction) => {
		req.entity = entity;
		next();
	};
}
