import axios from 'axios';
import { FC, createContext, useContext, useEffect, useState } from 'react';
import { userService } from 'src/services/user/user.service';
import { UserInfo } from 'src/services/user/user.types';
import { useAsync } from 'src/shared/hooks/useAsync';
import { toast } from 'src/shared/utils/toast';

type AuthContextType = {
	user: UserInfo | null;
	loadingUser: boolean;
	fetchUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<UserInfo | null>(null);

	const fetchUser = async () => {
		try {
			const userInfo = await userService.getMe();
			setUser(userInfo);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const { loading: loadingUser, execute: handleFetchUser } =
		useAsync(fetchUser);

	useEffect(() => {
		handleFetchUser();
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, fetchUser: handleFetchUser, loadingUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within a AuthProvider');
	}
	return context;
};
