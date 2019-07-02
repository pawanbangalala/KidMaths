import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const SkipButton = () => {
	return (
		<View
			style={{
				width: '100%',
				flex: 1.5,
				flexDirection: 'row',
				justifyContent: 'space-around',
				backgroundColor: '#000',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text
				style={{
					color: '#CDDC39',
					fontFamily: 'Righteous-Regular',
					fontSize: 24,
					fontWeight: '700',
					marginRight: 12,
				}}
			>
				Skip, can't solve this
			</Text>
			<Icon name="ios-arrow-forward" type="ionicon" size={32} color="#CDDC39" />
			<Icon name="ios-arrow-forward" type="ionicon" size={32} color="#CDDC39" />
			<Icon name="ios-arrow-forward" type="ionicon" size={32} color="#CDDC39" />
		</View>
	);
};

export default SkipButton;
