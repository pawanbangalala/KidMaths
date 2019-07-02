import * as firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyBWX8X9HudZga_tX1aIAHJ06Qg_TMz_ML0',
	authDomain: 'kiidmaths.firebaseapp.com',
	databaseURL: 'https://kiidmaths.firebaseio.com',
	projectId: 'kiidmaths',
	storageBucket: '',
	messagingSenderId: '219981524984',
	appId: '1:219981524984:web:aeb31f6cdf811620',
};

export default class Firebase {
	static auth;

	static init() {
		firebase.initializeApp(firebaseConfig);
		Firebase.auth = firebase.auth();
	}

	static async registerUser(name, email, password) {
		console.log('registering new user');
		await Firebase.auth
			.createUserWithEmailAndPassword(email, password)
			.then(data => {
				console.log('hello');
				console.log('response', data);
				let user = data.user;
				console.log('user', user);
			})
			.catch(error => console.log('error', error));
	}

	static async loginUser(email, password) {
		console.log('logging in user');
		await Firebase.auth
			.signInWithEmailAndPassword(email, password)
			.then(response => {
				console.log('response login : ', response);
			})
			.catch(error => console.log('error login ', error));
	}

	static async logoutUser() {
		await Firebase.auth.signOut();
	}

	static getUser() {
		return Firebase.currentUser;
	}
}
