import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Screen, Navigator } = createNativeStackNavigator();

import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import BusScreen from '../screens/BusScreen'
import CheckInScreen from '../screens/CheckInScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'

export function StackRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false, }}>
			<Screen name="Home" component={HomeScreen} />
			<Screen name="Register" component={RegisterScreen} />
			<Screen name="Bus" component={BusScreen} />
			<Screen name="Check" component={CheckInScreen} />
			<Screen name="Search" component={SearchScreen} />
			<Screen name="Profile" component={ProfileScreen} />
		</Navigator>
	);
}