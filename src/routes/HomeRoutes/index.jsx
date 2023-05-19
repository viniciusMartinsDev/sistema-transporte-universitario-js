import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../../screens/HomeScreen"
import ProfileScreen from '../../screens/ProfileScreen'
import TransportScreen from '../../screens/TransportScreen'
import SearchScreen from '../../screens/SearchScreen'
import { View } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';

const { Navigator, Screen } = createBottomTabNavigator()
export default function AppHome() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Home" component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon name="home" size={25} color={focused ? '#2C95E1' : '#878787'} />
						</View>
					)
				}}
			/>
			<Screen name="Search" component={SearchScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon name="search1" size={25} color={focused ? '#2C95E1' : '#878787'} />
						</View>
					)
				}}
			/>
			<Screen name="Transport" component={TransportScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon name="pluscircleo" size={25} color={focused ? '#2C95E1' : '#878787'} />
						</View>
					)
				}}
			/>
			<Screen name="Profile" component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon name="user" size={25} color={focused ? '#2C95E1' : '#878787'} />
						</View>
					)
				}}
			/>
		</Navigator>
	)
}