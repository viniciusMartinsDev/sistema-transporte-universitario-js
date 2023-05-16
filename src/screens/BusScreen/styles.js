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
		backgroundColor: '#F8F8F8',
		padding: 20
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
		backgroundColor: '#F8F8F8',
		width: '100%',
		height: '5%'
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
		backgroundColor: '#F8F8F8',
		width: '100%',
		height: '65%',
		paddingTop: 20
	},
	menu: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
		height: '10%',
		backgroundColor: '#2C95E1'
	}
})
export default styles