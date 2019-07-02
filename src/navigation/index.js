import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const authenticationStack = createSwitchNavigator(
	{
		Login: {
			screen: LoginScreen,
		},
		Register: {
			screen: RegistrationScreen,
		},
	},
	{
		initialRouteName: 'Login',
	}
);

const createRootNavigator = signedIn =>
	createSwitchNavigator(
		{
			Home: {
				screen: HomeScreen,
			},
			authentication: {
				screen: authenticationStack,
			},
		},
		{
			initialRouteName: signedIn ? 'Home' : 'authentication',
		}
	);

const AppContainer = signedIn => {
	let rootNavigator = createRootNavigator(signedIn);
	return createAppContainer(rootNavigator);
};

export default signedIn => AppContainer(signedIn);
