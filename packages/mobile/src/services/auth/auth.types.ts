export type LoginBody = {
	email: string;
	password: string;
};

export type RegisterBody = {
	email: string;
	name: string;
	phone: string;
	address: string;
	password: string;
};

export type VerifyPinBody = {
	email: string;
	pin: string;
};

export type AccessTokenResponse = {
	accessToken: string;
};
