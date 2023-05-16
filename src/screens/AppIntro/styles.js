import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Droid Sans'
	},
	sectionLogo: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		padding: 25
	},
	sectionLogoText: {
		fontSize: 40,
		fontWeight: '500',
		color: '#2C95E1',
	},
	sectionButton: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 25
	},

});

export default styles