import React from "react";
import { View, Text, StatusBar, Image, TextInput, Button } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const logo = require('../../assets/logo.png')
import styles from './styles'

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='dark-content' />
			<View style={styles.sectionLogo}>
				<Image source={logo} />
				<Text style={styles.sectionLogoText}>Tech Ride</Text>
			</View>
			<View style={styles.sectionData}>
				<Text style={styles.sectionDataTextTitle}>Acessar</Text>
				<View style={styles.sectionDataInputs}>
					<TextInput
						style={styles.input}
						value=""
						placeholder="exemplo@exemplo.com"
						placeholderTextColor="#a0a0a0"
					/>
					<TextInput
						style={styles.input}
						value=""
						placeholder="**********"
						placeholderTextColor="#a0a0a0"
					/>
					<View style={styles.sectionDataInputsOptions}>
						<View style={styles.sectionDataInputsOptionsText}>
							<BouncyCheckbox size={25} fillColor="#2C95E1" />
							<Text>Lembrar senha?</Text>
						</View>
						<Text>Esqueceu a senha?</Text>
					</View>
				</View>
				<View style={styles.sectionDataBtn}>
					<Button
						title="Entrar"
						color="#2C95E1"
						onPress={() => navigation.navigate('Bus')}
					/>
					<Button
						title="Cadastrar"
						color="#2C95E1"
						onPress={() => navigation.navigate('Register')}
					/>
				</View>

			</View>
		</View>
	)
}
export default HomeScreen