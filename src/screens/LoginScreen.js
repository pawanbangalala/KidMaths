import React, { Component } from 'react';
import { View, Alert, Text, StatusBar, TouchableOpacity } from 'react-native';
import Loader from '../components/Loader';
import UserInput from '../components/UserInput';
import Firebase from '../utils/Firebase';

export default class LoginScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			name: '',
			password: '',
		};
	}

	componentDidMount() {
		Firebase.auth.onAuthStateChanged(user => {
			setTimeout(() => {
				if (user) {
					this.props.navigation.navigate('Home');
				} else {
					this.props.navigation.navigate('Login');
				}
			}, 500);
		});
	}

	handleLoginButton = () => {
		// this.setState({ loading: true }, () => {
		// 	setTimeout(() => {
		// 		this.setState({ loading: false });
		// 	}, 2000);
		// });
		if (this.validateNameAndPassword()) {
			this.setState({ loading: true }, async () => {
				console.log('email', 'calling firebase method');
				const email = `${this.state.name.replace(/\s/, '')}@kidmaths.com`;
				console.log('email :', email);
				await Firebase.loginUser(email, this.state.password);
				this.setState({ loading: false });
			});
		}
	};

	handleUserName = value => {
		this.setState({ name: value });
	};

	handlePassword = value => {
		this.setState({ password: value });
	};

	validateNameAndPassword = () => {
		if (this.state.name.length < 4) {
			Alert.alert('enter a valid name');
			return false;
		}

		if (this.state.password.length < 6) {
			Alert.alert('enter a valid password');
		}
		return true;
	};

	render() {
		const { container, title, button, btnText, byline } = styles;
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
						note="min. 4 characters"
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
						note="min. 6 characters"
					/>
					<TouchableOpacity style={button} onPress={this.handleLoginButton}>
						<Text style={btnText}>Sign In</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
						<Text style={byline}>New User ? Sign Up</Text>
					</TouchableOpacity>
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
		borderRadius: 4,
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
