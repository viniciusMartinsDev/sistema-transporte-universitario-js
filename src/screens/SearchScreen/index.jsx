import { View, Text } from "react-native";
import styles from './styles'
import AppMenu from "../../components/AppMenu";
export default function SearchScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>SearchScreen</Text>
			<AppMenu navigation={navigation} />
		</View>
	)
}