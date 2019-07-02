import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Firebase from '../utils/Firebase';

const Header = props => {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={{ alignItems: 'flex-end', position: 'absolute', left: 16 }}>
					<Icon
						name="logout"
						type="antdesign"
						size={20}
						color="#CDDC39"
						style={{ marginHorizontal: 4 }}
						onPress={() => Firebase.logoutUser()}
					/>
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Text style={styles.title}>{props.title}</Text>
				</View>
				<View style={{ alignItems: 'flex-end', position: 'absolute', right: 16 }}>
					<Icon
						name="user-circle-o"
						type="font-awesome"
						size={20}
						color="#CDDC39"
						style={{ marginHorizontal: 4 }}
						onPress={() => Firebase.logoutUser()}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = {
	container: {
		width: '100%',
		paddingTop: 20,

		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#CDDC39',
		fontFamily: 'Righteous-Regular',
		marginBottom: 8,
	},
};

export default Header;
