import React, { Component } from 'react';
import { View, Text } from 'react-native';
import createAppContainer from './navigation';
import Firebase from './utils/Firebase';
import SplashScreen from 'react-native-splash-screen';
class App extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
		};
	}

	componentWillMount() {
		Firebase.init();
		const user = Firebase.getUser();
		this.setState({ user: user });
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		const AppContainer = createAppContainer(this.state.user !== null);
		return <AppContainer />;
	}
}

export default App;
