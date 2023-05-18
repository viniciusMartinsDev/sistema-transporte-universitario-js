import React from "react";
import { View, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles'
import BusComponent from "../../components/BusComponent";

export default function BusScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.perfilDetails}>
				<Icon name="user" size={60} color='#2C95E1' />
				<Text style={styles.perfilDetailsText}>Olá, nome</Text>
			</View>
			<View style={styles.sectionInput}>
				<TextInput placeholder="Buscar" style={styles.sectionInputInput}
					placeholderTextColor="#a0a0a0" />
			</View>
			<View style={styles.main}>
				<BusComponent />
				<BusComponent />
			</View>
		</View>
	)
}