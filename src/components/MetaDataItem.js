import React from 'react';
import { View, Text } from 'react-native';

const MetaDataItem = props => {
	const { tag, score, byline } = props;
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: props.backgroundColor }}
		>
			<View style={{ flexDirection: 'row', paddingVertical: 4, alignItems: 'center' }}>
				<Text style={{ color: '#fff', fontSize: 32, marginHorizontal: 8, fontWeight: '700' }}>{score}</Text>
				{tag != undefined && <Text style={{ color: '#fff' }}>secs</Text>}
			</View>
			<Text style={{ color: '#fff', marginBottom: 4, fontSize: 16 }}>{byline}</Text>
		</View>
	);
};

export default MetaDataItem;
