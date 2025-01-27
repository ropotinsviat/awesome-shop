import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Response, NextFunction } from 'express';
import { RequestWithEntity } from '../types';

type StringKeys<T> = Extract<keyof T, string>;

@Injectable()
export class IsExistMiddleware implements NestMiddleware {
	constructor(private readonly prisma: PrismaService) {}

	async use(req: RequestWithEntity, _res: Response, next: NextFunction) {
		const { id } = req.params;
		const entity = req.entity;

		if (!id || !entity) {
			throw new NotFoundException(
				'Invalid request: Missing ID or entity type.',
			);
		}

		if (!this.isValidEntity(entity)) {
			throw new NotFoundException(`Invalid entity type: ${entity}.`);
		}

		const model = this.prisma[entity] as PrismaDelegate;

		const exists = await model.findUnique({ where: { id } });

		if (!exists) {
			throw new NotFoundException(`Resource with id ${id} not found.`);
		}

		next();
	}

	private isValidEntity(entity: string): entity is StringKeys<PrismaService> {
		return entity in this.prisma;
	}
}

type PrismaDelegate = {
	findUnique: (args: any) => Promise<any>;
};
