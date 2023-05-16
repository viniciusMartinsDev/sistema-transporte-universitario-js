import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
const logo = require('../../assets/logo.png')

export default function AppIntro({ childToParent }) {
	const data = false
	return (
		<View style={styles.container}>
			<StatusBar barStyle='dark-content' />
			<View style={styles.sectionLogo}>
				<Image source={logo} />
				<Text style={styles.sectionLogoText}>Tech Ride</Text>
			</View>
			<View style={styles.sectionButton}>
				<Icon name="rightcircle" size={50} color="#2C95E1" onPress={() => childToParent(data)} />

			</View>
		</View>
	)
}