import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
import BusComponent from "../../components/BusComponent";

const HomeScreen = () => {

	const transports = [
		{
			id: 1,
			modelo: 'micro-onibus',
			saida: 'Cambara',
			destino: 'Ourinhos',
			periodo: 'noturno'
		},
		{
			id: 2,
			modelo: 'Onibus',
			saida: 'Palmital',
			destino: 'Ourinhos',
			periodo: 'noturno'
		},
		{
			id: 3,
			modelo: 'Onibus',
			saida: 'Palmital',
			destino: 'Ourinhos',
			periodo: 'noturno'
		}
	]

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
			<ScrollView style={styles.main}>
				{
					transports.map(
						transport => (
							<BusComponent
								key={transport.id}
								modelo={transport.modelo}
								saida={transport.saida}
								destino={transport.destino}
								periodo={transport.periodo}
							/>
						)
					)
				}

			</ScrollView>
		</View>
	)
}
export default HomeScreen