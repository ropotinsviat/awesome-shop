export const appConfig = {
	port: process.env.PORT || 3030,
	validationPipe: {
		whitelist: true,
		forbidNonWhitelisted: true,
		transform: true,
	},
	cors: {
		origin: '*',
		methods: 'GET,PUT,POST,DELETE',
		exposedHeaders: ['Authorization'],
		credentials: true,
	},
};
