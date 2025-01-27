import { HttpFactoryService } from 'src/shared/services/http-factory.service';
import { EnhancedWithAuthHttpService } from 'src/shared/services/http-auth.service';
import { ApiResponse } from 'src/shared/types';
import { EditPasswordBody, EditUserBody, UserInfo } from './user.types';

class UserService {
	constructor(private readonly httpService: EnhancedWithAuthHttpService) {}

	getMe(): Promise<UserInfo> {
		return this.httpService.get('users/me');
	}

	editPassword(editPassword: EditPasswordBody): Promise<ApiResponse> {
		return this.httpService.put('users/me/password', editPassword);
	}

	editUser(user: EditUserBody): Promise<ApiResponse> {
		return this.httpService.put(`users/me`, user);
	}
}

export const userService = new UserService(
	new HttpFactoryService().createAuthHttpService(),
);
