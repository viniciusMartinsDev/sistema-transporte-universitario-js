import { View, Text, Image } from "react-native";
import styles from './styles'

const iconBus = require('../../assets/iconBus.png')

export default function BusComponent() {
	return (
		<View style={styles.container}>
			<Image source={iconBus} />
			<View style={styles.text}>
				<Text>Onibus</Text>
				<Text>Saida:</Text>
				<Text>Destino</Text>
			</View>
			<View style={styles.span}>
				<Text>Periodo: </Text>
			</View>
		</View>
	)
}
