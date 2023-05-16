import { View, Text } from "react-native";
import styles from './styles'
import AppMenu from "../../components/AppMenu";
export default function ProfileScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>ProfileScreen</Text>
			<AppMenu navigation={navigation} />
		</View>
	)
}