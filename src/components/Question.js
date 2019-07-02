import React from 'react';
import { View, Text } from 'react-native';

export default (Question = () => {
	return (
		<View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ color: '#fff', fontSize: 24, fontWeight: '700', marginHorizontal: 3 }}>12333</Text>
			<Text style={{ color: '#fff', fontSize: 24, fontWeight: '700', marginHorizontal: 3 }}>+</Text>
			<Text style={{ color: '#fff', fontSize: 24, fontWeight: '700', marginHorizontal: 3 }}>12333</Text>
		</View>
	);
});
