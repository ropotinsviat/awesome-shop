import axios from 'axios';
import { useState, useCallback } from 'react';
import { toast } from '../utils/toast';

type AsyncFunction<T> = (...args: any[]) => Promise<T>;

export function useAsync<T>(asyncFn: AsyncFunction<T>) {
	const [loading, setLoading] = useState(false);

	const execute = useCallback(
		async (...args: Parameters<AsyncFunction<T>>): Promise<T | void> => {
			setLoading(true);
			try {
				const result = await asyncFn(...args);
				return result;
			} catch (error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message);
				}
			} finally {
				setLoading(false);
			}
		},
		[asyncFn],
	);

	return { loading, execute };
}
