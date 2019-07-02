import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default class UserInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			secure: props.secureTextEntry,
		};
	}

	handleShowText = () => {
		this.setState({
			secure: !this.state.secure,
		});
	};

	render() {
		const { container, title, input, notes } = styles;
		const {
			secureTextEntry,
			value,
			onChangeText,
			placeholder,
			keyboardType,
			returnKeyType,
			label,
			note,
			mismatch,
		} = this.props;
		return (
			<View style={container}>
				<Text style={title}>{label}</Text>
				<View
					style={{
						flexDirection: 'row',
						borderBottomColor: '#CDDC39',
						borderBottomWidth: 0.5,
					}}
				>
					<TextInput
						ref={reference => (this.input = reference)}
						style={[input, { color: mismatch ? '#f00' : '#fff' }]}
						underlineColorAndroid="transparent"
						secureTextEntry={this.state.secure}
						value={value}
						onChangeText={onChangeText}
						placeholder={placeholder}
						autoCapitalize="none"
						autoCorrect={false}
						placeholderTextColor="#333333"
						keyboardType={keyboardType}
						returnKeyType={returnKeyType}
					/>
					{this.props.secureTextEntry && (
						<Icon
							type="ionicon"
							name={this.state.secure ? 'ios-eye-off' : 'ios-eye'}
							size={18}
							color="#CDDC39"
							onPress={this.handleShowText}
						/>
					)}
				</View>
				<Text style={notes}>{note}</Text>
			</View>
		);
	}
}

const styles = {
	container: {
		width: '100%',
		paddingHorizontal: 4,
		paddingVertical: 8,
		justifyContent: 'space-around',
		alignItems: 'flex-start',

		marginBottom: 4,
	},
	title: {
		fontSize: 14,
		color: '#CDDC39',
		paddingVertical: 4,
		marginBottom: 4,
	},
	input: {
		width: '100%',
		color: '#fff',
		fontSize: 20,
		fontWeight: '600',
		paddingHorizontal: 4,
		paddingBottom: 4,
	},
	notes: {
		fontSize: 10,
		color: '#CDDC39',
		paddingVertical: 4,
		marginBottom: 4,
		marginTop: 4,
		alignSelf: 'flex-end',
	},
};
