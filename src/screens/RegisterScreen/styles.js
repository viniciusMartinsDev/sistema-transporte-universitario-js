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
		justifyContent: 'center',
		padding: 30
	},
	sectionLogoText: {
		fontSize: 30,
		fontWeight: '500',
		color: '#2C95E1',
		marginLeft: 8
	},
	sectionLogoImage: {
		width: 80,
		height: 80
	},
	sectionData: {
		flex: 4,
		width: '100%',
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
		padding: 25,
		marginBottom: 25
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
		flexDirection: 'row',
	},
	sectionDataBtnBack: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		borderRadius: 8
	}

});

export default styles