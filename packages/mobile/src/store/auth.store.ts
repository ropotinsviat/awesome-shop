import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Tokens = {
	accessToken: string | null;
	refreshToken: string | null;
};

type AuthStore = {
	isAuth: boolean;
	setIsAuth: (newIsAuth: boolean) => void;
	tokens: Tokens | null;
	setTokens: (newTokens: Tokens | null) => void;
};

export const useAuthStore = create<AuthStore>()(
	persist(
		(set) => ({
			isAuth: false,
			setIsAuth: (newIsAuth) => set({ isAuth: newIsAuth }),
			tokens: null,
			setTokens: (newTokens) => set({ tokens: newTokens }),
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
