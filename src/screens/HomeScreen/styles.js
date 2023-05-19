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
		height: '20%',
		padding: 25,
		alignItems: 'center',

	},
	perfilDetailsText: {
		fontSize: 30,
		fontWeight: '400',
		marginLeft: 20,
		color: '#2C95E1'
	},
	sectionInput: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '10%',

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
		width: '100%',
		height: '60%',
		padding: 10,
		// backgroundColor: '#f56'
	},
	shadowProp: {
		shadowColor: '#26394D',
		shadowOffset: { width: 0, height: 4, },
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 9
	},

});

export default styles
