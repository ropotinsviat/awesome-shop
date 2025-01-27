import { HttpFactoryService } from 'src/shared/services/http-factory.service';
import { HttpService } from 'src/shared/services/http.service';
import {
	AccessTokenResponse,
	LoginBody,
	RegisterBody,
	VerifyPinBody,
} from './auth.types';
import { ApiResponse } from 'src/shared/types';

class AuthService {
	constructor(private readonly httpService: HttpService) {}

	login(body: LoginBody): Promise<AccessTokenResponse> {
		return this.httpService.post('auth/login', body);
	}

	register(body: RegisterBody): Promise<ApiResponse> {
		return this.httpService.post('auth/register', body);
	}

	verifyPin(body: VerifyPinBody): Promise<ApiResponse> {
		return this.httpService.post('auth/verify-pin', body);
	}
}

export const authService = new AuthService(
	new HttpFactoryService().createHttpService(),
);
