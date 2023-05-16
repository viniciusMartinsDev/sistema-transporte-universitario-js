import React, { useState } from "react";
import { View, Text, StatusBar, Image, TextInput, Button } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
const logo = require('../../assets/logo.png')
import styles from './styles'
const RegisterScreen = ({ navigation }) => {
	const [showApp, setShowApp] = useState(true)
	return (
		<View style={styles.container}>
			<StatusBar barStyle='dark-content' />
			<View style={styles.sectionLogo}>
				<Image source={logo} style={styles.sectionLogoImage} />
				<Text style={styles.sectionLogoText}>Tech Ride</Text>
			</View>
			<View style={styles.sectionData}>
				<Text style={styles.sectionDataTextTitle}>Cadastro</Text>
				<View style={styles.sectionDataInputs}>
					<TextInput
						style={styles.input}
						value=""
						placeholder="Primeiro Nome"
						placeholderTextColor="#a0a0a0"
					/>
					<TextInput
						style={styles.input}
						value=""
						placeholder="Último nome"
						placeholderTextColor="#a0a0a0"
					/>
					<TextInput
						style={styles.input}
						value=""
						placeholder="RG"
						placeholderTextColor="#a0a0a0"
					/>
					<TextInput
						style={styles.input}
						value=""
						placeholder="CPF"
						placeholderTextColor="#a0a0a0"
					/>
					<TextInput
						style={styles.input}
						value=""
						placeholder="exemplo@exemplo.com"
						placeholderTextColor="#a0a0a0"
					/>
					<TextInput
						style={styles.input}
						value=""
						placeholder="Senha"
						placeholderTextColor="#a0a0a0"
					/>
					<TextInput
						style={styles.input}
						value=""
						placeholder="Repita a senha "
						placeholderTextColor="#a0a0a0"
					/>

				</View>
				<View style={styles.sectionDataBtn}>
					<View style={styles.sectionDataBtnBack}>
						<Icon
							name="left"
							size={20}
							color="#2C95E1"
						/>
						<Button
							title="Voltar"
							color="#2C95E1"
							onPress={() => navigation.goBack()}
						/>

					</View>
					<View style={styles.sectionDataBtnBack}>
						<Button
							title="Finalizar"
							color="#2C95E1"
							onPress={showApp ? () => navigation.navigate('Home') : window.alert('Deu ruim')}
						/>
						<Icon
							name="check"
							size={20}
							color="#2C95E1"
						/>
					</View>
				</View>

			</View>
		</View>
	)
}


export default RegisterScreen