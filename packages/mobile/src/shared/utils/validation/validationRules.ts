export const validationRules = {
	email: {
		required: 'Email is required',
		pattern: {
			value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			message: 'Invalid email address',
		},
	},
	password: {
		required: 'Password is required',
		minLength: {
			value: 6,
			message: 'Password must be at least 6 characters',
		},
	},
	name: {
		required: 'Full name is required',
	},
	phone: {
		required: 'Phone number is required',
		pattern: {
			value: /^\+?[1-9]\d{1,14}$/,
			message: 'Invalid phone number',
		},
	},
	shippingAddress: {
		required: 'Shipping address is required',
	},
	confirmPassword: (password: string) => ({
		required: 'Please confirm your password',
		validate: (value: string) =>
			value === password || 'Passwords should match',
	}),
	pin: (cellCount: number) => ({
		required: 'PIN is required',
		minLength: {
			value: cellCount,
			message: `PIN must be ${cellCount} digits long`,
		},
	}),
};
