import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
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
	sectionData: {
		flex: 2,
		width: '100%',
		padding: 25,
		// justifyContent: 'space-evenly',
		alignItems: 'center',

	},
	sectionDataTextTitle: {
		fontSize: 30,
		fontWeight: '600',
		marginBottom: 25,
		color: '#606060'
	},
	sectionDataInputs: {
		display: 'flex',
		flexDirection: 'column',
		borderTopWidth: 2,
		borderTopColor: '#C0C0C0',
		paddingLeft: 25,
		paddingRight: 25,
		paddingBottom: 55,
		paddingTop: 55,
		marginBottom: 25
	},
	sectionDataInputsOptions: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	sectionDataInputsOptionsText: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',

	},
	input: {
		height: 40,
		width: 300,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 8,
	},
	sectionDataBtn: {
		display: 'flex',
		flexDirection: 'column',
	}

});

export default styles