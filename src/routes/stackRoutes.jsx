import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeRoutes from '../routes/HomeRoutes';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false, }}>
			<Screen name="Login" component={LoginScreen} />
			<Screen name="Register" component={RegisterScreen} />
			<Screen name="HomeRoutes" component={HomeRoutes} />
		</Navigator>
	);
}
