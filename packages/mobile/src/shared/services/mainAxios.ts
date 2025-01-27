import type { AxiosResponse } from 'axios';
import axios from 'axios';

export const mainAxios = axios.create({
	baseURL: 'http://10.0.2.2:3030',
	withCredentials: true,
});

mainAxios.interceptors.response.use(
	(response): AxiosResponse<unknown, unknown> => {
		return response;
	},
	async (error) => {
		if (Boolean(error.response) && error.response.status === 401) {
			// useAuthStore.getState().setAuth(false)();
		}
		return Promise.reject(error);
	},
);
