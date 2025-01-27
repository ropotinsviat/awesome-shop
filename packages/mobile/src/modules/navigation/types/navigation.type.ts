export enum NAVIGATION_KEYS {
	LOGIN = 'LOGIN',
	REGISTER = 'REGISTER',
	PIN_VERIFY = 'PIN_VERIFY',
	REGISTER_SUCCESS = 'REGISTER_SUCCESS',
	BOTTOMTABS = 'BOTTOMTABS',
	PRODUCTS = 'PRODUCTS',
	PRODUCTS_INFO = 'PRODUCTS_INFO',
	CART = 'CART',
	EDIT_CART = 'EDIT_CART',
	ORDERS = 'ORDERS',
	ORDER_DETAILS = 'ORDER_DETAILS',
	EDIT_ORDER_DETAIL = 'EDIT_ORDER_DETAIL',
	PAYMENT_SUCCESS = 'PAYMENT_SUCCESS',
	SETTINGS = 'SETTINGS',
	FAQ = 'FAQ',
	EDIT_PASSWORD = 'EDIT_PASSWORD',
	EDIT_USER = 'EDIT_USER',
}

type BottomTabParamList = {
	PRODUCTS: undefined;
	ORDERS: undefined;
	SETTINGS: undefined;
};

export type RootStackParamList = {
	[NAVIGATION_KEYS.LOGIN]: undefined;
	[NAVIGATION_KEYS.REGISTER]: undefined;
	[NAVIGATION_KEYS.PIN_VERIFY]: { email: string };
	[NAVIGATION_KEYS.REGISTER_SUCCESS]: undefined;
	[NAVIGATION_KEYS.BOTTOMTABS]: { screen: keyof BottomTabParamList };
	[NAVIGATION_KEYS.PRODUCTS]: undefined;
	[NAVIGATION_KEYS.ORDERS]: undefined;
	[NAVIGATION_KEYS.SETTINGS]: undefined;
	[NAVIGATION_KEYS.PRODUCTS_INFO]: { productId: string };
	[NAVIGATION_KEYS.CART]: undefined;
	[NAVIGATION_KEYS.EDIT_CART]: { productId: string };
	[NAVIGATION_KEYS.ORDER_DETAILS]: { orderId: string };
	[NAVIGATION_KEYS.PAYMENT_SUCCESS]: { orderId: string };
	[NAVIGATION_KEYS.FAQ]: undefined;
	[NAVIGATION_KEYS.EDIT_ORDER_DETAIL]: {
		orderId: string;
		orderDetailId: string;
		canEdit: boolean;
	};
	[NAVIGATION_KEYS.EDIT_PASSWORD]: undefined;
	[NAVIGATION_KEYS.EDIT_USER]: undefined;
};
