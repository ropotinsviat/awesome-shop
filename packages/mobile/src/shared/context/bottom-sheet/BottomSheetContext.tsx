import React, { createContext, useContext, useRef, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

type BottomSheetContextType = {
	bottomSheetRef: React.RefObject<BottomSheet>;
	openBottomSheet: () => void;
	closeBottomSheet: () => void;
	snapPoints: string[];
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
	undefined,
);

export const BottomSheetProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

	const openBottomSheet = () => {
		bottomSheetRef.current?.expand();
	};

	const closeBottomSheet = () => {
		bottomSheetRef.current?.close();
	};

	return (
		<BottomSheetContext.Provider
			value={{
				bottomSheetRef,
				openBottomSheet,
				closeBottomSheet,
				snapPoints,
			}}
		>
			{children}
		</BottomSheetContext.Provider>
	);
};

export const useBottomSheet = () => {
	const context = useContext(BottomSheetContext);
	if (!context) {
		throw new Error(
			'useBottomSheet must be used within a BottomSheetProvider',
		);
	}
	return context;
};
