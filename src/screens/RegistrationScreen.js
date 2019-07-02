import React, { Component } from 'react';
import { View, Alert, Text, StatusBar, TouchableOpacity } from 'react-native';
import Loader from '../components/Loader';
import UserInput from '../components/UserInput';
import Firebase from '../utils/Firebase';
import * as firebase from 'firebase';

export default class RegistrationScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			name: '',
			password: '',
			confirmpassword: '',
			mismatch: false,
		};
	}

	handlerRegistration = () => {
		if (this.validateUserDetails()) {
			this.setState({ loading: true }, async () => {
				console.log('email', 'calling firebase method');
				const email = `${this.state.name.replace(/\s/, '')}@kidmaths.com`;
				console.log('email :', email);
				await Firebase.registerUser(this.state.name, email, this.state.password);
				this.setState({ loading: false }, () => this.props.navigation.navigate('Home'));
			});
		}
	};

	validateEmailAddress = () => {
		var re = /\S+@\S+\.\S+/;
		if (!re.test(this.state.email)) {
			Alert.alert('enter a valid email address');
			return false;
		}
		return true;
	};

	validateUserDetails = () => {
		if (this.state.name.length < 4) {
			Alert.alert('enter a valid name');
			return false;
		}

		if (this.state.password.length < 6) {
			Alert.alert('enter a valid password');
			return false;
		}

		if (this.state.mismatch) {
			Alert.alert('passwords do not match');
			return false;
		}

		return true;
	};

	handleUserName = value => {
		this.setState({ name: value });
	};

	handleConfirmPassword = value => {
		this.setState({ confirmpassword: value }, () => {
			if (this.state.confirmpassword === this.state.password) {
				this.setState({ mismatch: false });
			} else {
				this.setState({ mismatch: true });
			}
		});
	};

	handlePassword = value => {
		this.setState({ password: value }, () => {
			if (this.state.confirmpassword === this.state.password) {
				this.setState({ mismatch: false });
			} else {
				this.setState({ mismatch: true });
			}
		});
	};

	validateUserDetails = () => {
		return true;
	};

	v;

	render() {
		const { container, title, input, button, btnText, byline } = styles;
		return (
			<View style={container}>
				{/* <StatusBar barStyle="light-content" backgroundColor="#00000A" /> */}
				<View style={{ width: '80%', alignItems: 'center' }}>
					<Text style={title}>KidMaths</Text>
					<UserInput
						label="user name"
						placeholder="user name"
						autoCapitalize="none"
						autoCorrect={false}
						placeholderTextColor="#a1a1a1"
						underlineColorAndroid="transparent"
						keyboardType="default"
						returnKeyType="next"
						value={this.state.name}
						onChangeText={this.handleUserName}
					/>

					<UserInput
						label="password"
						placeholder="password"
						placeholderTextColor="#a1a1a1"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid="transparent"
						keyboardType="default"
						returnKeyType="go"
						secureTextEntry={true}
						value={this.state.password}
						onChangeText={this.handlePassword}
					/>

					<UserInput
						label="confirm passwoord"
						placeholder="confirm passowrd"
						autoCapitalize="none"
						autoCorrect={false}
						placeholderTextColor="#a1a1a1"
						underlineColorAndroid="transparent"
						keyboardType="default"
						returnKeyType="next"
						mismatch={this.state.mismatch}
						value={this.state.confirmpassword}
						secureTextEntry={true}
						onChangeText={this.handleConfirmPassword}
					/>

					<View style={{ alignItems: 'center' }}>
						<TouchableOpacity style={button} onPress={this.handlerRegistration}>
							<Text style={btnText}>Sign Up</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate('Login');
							}}
						>
							<Text style={byline}>Existing User ? Sign in</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Loader loading={this.state.loading} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#00000A',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#CDDC39',
		fontFamily: 'Righteous-Regular',
		marginBottom: 32,
	},
	input: {
		width: '100%',
		borderRadius: 2,
		paddingHorizontal: 8,
		paddingVertical: 12,
		backgroundColor: '#aeaeae',
		color: '#333333',
		fontSize: 22,
		fontWeight: '700',
		marginBottom: 16,
	},
	button: {
		backgroundColor: '#333333',

		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
		borderRadius: 8,
	},
	btnText: {
		fontSize: 26,
		fontWeight: '800',
		color: '#CDDC39',
		paddingHorizontal: 40,
		paddingVertical: 8,
		fontFamily: 'Righteous-Regular',
	},
	byline: {
		fontSize: 12,
		color: '#CDDC39',
	},
};
