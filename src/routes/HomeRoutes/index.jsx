import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../../screens/HomeScreen"
import ProfileScreen from '../../screens/ProfileScreen'
import TransportScreen from '../../screens/TransportScreen'
import SearchScreen from '../../screens/SearchScreen'

const { Navigator, Screen } = createBottomTabNavigator()
export default function AppHome() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Home" component={HomeScreen} />
			<Screen name="Search" component={SearchScreen} />
			<Screen name="Transport" component={TransportScreen} />
			<Screen name="Profile" component={ProfileScreen} />
		</Navigator>
	)
}