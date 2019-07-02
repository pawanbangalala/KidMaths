import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';

const Loader = props => {
	const { loading } = props;
	return (
		<Modal transparent={true} visible={loading} animationType={'none'}>
			<View style={styles.background}>
				<View style={styles.container}>
					<ActivityIndicator animating={loading} color="#CDDC39" />
				</View>
			</View>
		</Modal>
	);
};

export default Loader;

const styles = {
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'column',
		backgroundColor: '#000000AA',
	},
	container: {
		width: 80,
		height: 80,
		justifyContent: 'space-around',
		alignItems: 'center',
		display: 'flex',

		borderRadius: 10,
		backgroundColor: '#000',
		opacity: 0.5,
	},
};
