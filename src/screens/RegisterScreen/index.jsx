import React, { useState } from "react";
import { View, Text, StatusBar, Image, TextInput, Button } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles'

const logo = require('../../assets/logo.png')

const RegisterScreen = ({ navigation }) => {
	
	const [showApp, setShowApp] = useState(true)
	const [nome, setNome] = useState('')
	const [sobrenome, setSobrenome] = useState('')
	const [rg, setRg] = useState('')
	const [cpf, setCpf] = useState('')
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [senhaRepetida, setSenhaRepetida] = useState('')

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
						value={nome}
						placeholder="Primeiro Nome"
						placeholderTextColor="#a0a0a0"
						onChangeText={nome => setNome(nome)}
					/>
					<TextInput
						style={styles.input}
						value={sobrenome}
						placeholder="Último nome"
						placeholderTextColor="#a0a0a0"
						onChangeText={sobrenome => setSobrenome(sobrenome)}
					/>
					<TextInput
						style={styles.input}
						value={rg}
						placeholder="RG"
						placeholderTextColor="#a0a0a0"
						onChangeText={rg => setRg(rg)}
					/>
					<TextInput
						style={styles.input}
						value={cpf}
						placeholder="CPF"
						placeholderTextColor="#a0a0a0"
						onChangeText={cpf => setCpf(cpf)}
					/>
					<TextInput
						style={styles.input}
						value={email}
						placeholder="exemplo@exemplo.com"
						placeholderTextColor="#a0a0a0"
						onChangeText={email => setEmail(email)}
					/>
					<TextInput
						style={styles.input}
						value={senha}
						placeholder="Senha"
						secureTextEntry={true}
						placeholderTextColor="#a0a0a0"
						onChangeText={senha => setSenha(senha)}
					/>
					<TextInput
						style={styles.input}
						value={senhaRepetida}
						secureTextEntry={true}
						placeholder="Repita a senha "
						placeholderTextColor="#a0a0a0"
						onChangeText={senhaRepetida => setSenhaRepetida(senhaRepetida)}
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
							onPress={showApp ? () => navigation.navigate('Login') : window.alert('Deu ruim')}
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
