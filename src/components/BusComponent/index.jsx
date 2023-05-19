import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5';

const iconBus = require('../../assets/iconBus.png')

export default function BusComponent({ modelo, saida, destino, periodo }) {
	return (
		<View style={[styles.container, styles.shadowProp]}>
			<Icon name="bus-alt" size={40} color='#878787' />
			<View style={styles.text}>
				<Text>Modelo: {modelo}</Text>
				<Text>Saida: {saida}</Text>
				<Text>Destino: {destino}</Text>
			</View>
			<View style={styles.span}>
				<Text>Periodo: </Text>
				<Text>{periodo} </Text>
			</View>
		</View>
	)
}
