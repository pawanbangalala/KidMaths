import React from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';

const OptionItem = ({ text, color, overlayColor }) => {
	return (
		<TouchableHighlight
			style={{
				flex: 1,
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: color,
			}}
		>
			<Text style={{ fontSize: 28, fontWeight: '700', color: '#fff' }}>{text}</Text>
		</TouchableHighlight>
	);
};

export default OptionItem;
