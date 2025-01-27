import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from '../navigation/components/root-navigator';
import { useFonts } from 'expo-font';
import { fontsToLoad } from 'src/shared/utils/fonts';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetProvider } from 'src/shared/context/bottom-sheet';
import { AuthProvider } from 'src/shared/context/auth';

export const App = () => {
	const [loaded, error] = useFonts(fontsToLoad);

	if (!loaded && !error) {
		return null;
	}

	return (
		<AuthProvider>
			<SafeAreaProvider>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<BottomSheetProvider>
						<RootNavigator />
						<Toast />
					</BottomSheetProvider>
				</GestureHandlerRootView>
			</SafeAreaProvider>
		</AuthProvider>
	);
};
