export interface ApiResponse {
	message: string;
}

export interface IMail {
	subject: string;
	body: string;
}

export interface RequestWithEntity extends Request {
	params: { id: string };
	entity: string;
}
