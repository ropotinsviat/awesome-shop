import {
	Injectable,
	CanActivate,
	ExecutionContext,
	ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const requiredRoles = this.reflector.get<Role[]>(
			'roles',
			context.getHandler(),
		);

		if (!requiredRoles) {
			return true;
		}

		const request = context.switchToHttp().getRequest();
		const user = request.user;

		if (!user || !user.role) {
			throw new ForbiddenException('Access denied: user role not found.');
		}

		if (!requiredRoles.includes(user.role)) {
			throw new ForbiddenException(
				`Access denied: insufficient permissions for role ${user.role}.`,
			);
		}

		return true;
	}
}
