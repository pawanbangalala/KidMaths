import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const counter = () => {
	return (
		<LinearGradient
			colors={['#CDDC39', '#CDDC39']}
			style={{
				width: 80,
				height: 80,
				borderRadius: 40,
				borderWidth: 2,
				borderColor: '#33691E',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ color: '#fff', fontSize: 24, fontWeight: '700' }}>23</Text>
				<Text style={{ color: '#fff', fontSize: 18, fontWeight: '700' }}>Score</Text>
			</View>
		</LinearGradient>
	);
};

export default counter;
