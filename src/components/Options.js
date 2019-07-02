import React from 'react';
import { View } from 'react-native';
import OptionItem from './OptionItem';

const Options = ({ options }) => {
	return (
		<View style={{ flex: 10, backgroundColor: '#f5f5f5' }}>
			<View style={{ flex: 1, backgroundColor: '#ffbb00', flexDirection: 'row' }}>
				<OptionItem text={options[0]} color="#2979FF" overlayColor="#002566" />
				<OptionItem text={options[1]} color="#43A047" overlayColor="#2d6c30" />
			</View>
			<View style={{ flex: 1, backgroundColor: '#ffbb00', flexDirection: 'row' }}>
				<OptionItem text={options[2]} color="#F50057" overlayColor="#b3003e " />
				<OptionItem text={options[3]} color="#260036" overlayColor="#fff" />
			</View>
		</View>
	);
};

export default Options;
