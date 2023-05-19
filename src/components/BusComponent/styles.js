import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100%',
		padding: 10,
		marginBottom: 5,
		borderRadius: 8,

	},
	shadowProp: {
		shadowColor: '#26394D',
		shadowOffset: { width: 0, height: 4, },
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 9
	},

	text: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: '60%'
	},
	span: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		width: '20%'
	},
});

export default styles
