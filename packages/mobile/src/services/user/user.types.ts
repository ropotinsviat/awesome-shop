export type EditPasswordBody = {
	oldPassword: string;
	newPassword: string;
};

export type EditUserBody = {
	name: string;
	phone: string;
	address: string;
};

export type Role = 'USER' | 'ADMIN';

export type UserInfo = {
	email: string;
	name: string;
	phone: string;
	address: string;
	role: Role;
};
