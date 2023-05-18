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
	perfilDetails: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		padding: 25,
		// justifyContent: 'space-evenly',
		alignItems: 'center',

	},
	perfilDetailsText: {
		fontSize: 30,
		fontWeight: '400',
		marginLeft: 10,


	},
	sectionInput: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',

	},
	sectionInputInput: {
		height: 40,
		width: '80%',
		borderWidth: 1,
		padding: 10,
		borderRadius: 8,
	},
	main: {
		display: 'flex',
		flexDirection: 'column',
	}

});

export default styles
