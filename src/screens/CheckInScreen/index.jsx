import { View, Text } from "react-native";
import styles from './styles'
import AppMenu from "../../components/AppMenu";
export default function CheckInScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>CheckInScreen</Text>
			<AppMenu navigation={navigation} />
		</View>
	)
}