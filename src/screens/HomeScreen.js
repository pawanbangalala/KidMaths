import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';

import Header from '../components/Header';
import QuestionContainer from '../components/QuestionContainer';
import Question from '../components/Question';
import Counter from '../components/counter';
import MetaDataItem from '../components/MetaDataItem';
import Options from '../components/Options';
import SkipButton from '../components/SkipButton';
import getResult from '../utils/Numbers';
import Firebase from '../utils/Firebase';

export default class HomeScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			result: null,
		};
	}

	componentDidMount() {
		const result = getResult();
		this.setState({ result: result });
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#000" barStyle="light-content" />
				<Header title="KidMaths" />
				<View
					style={{
						backgroundColor: '#000',
						flexDirection: 'row',
					}}
				>
					<MetaDataItem backgroundColor="#8BC34A" score="25" tag="secs" byline="left" />
					<MetaDataItem backgroundColor="#2196F3" score="3/20" byline="score" />
				</View>
				{this.state.result !== null && (
					<View style={{ flex: 1, width: '100%' }}>
						<View
							style={{
								flexDirection: 'row',
								flex: 2,
								backgroundColor: '#000',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text style={{ color: '#fff', fontSize: 32, marginHorizontal: 4, fontWeight: '700' }}>
								{this.state.result.operand1}
							</Text>
							<Text style={{ color: '#fff', fontSize: 32, marginHorizontal: 4, fontWeight: '700' }}>
								{this.state.result.operator}
							</Text>
							<Text style={{ color: '#fff', fontSize: 32, marginHorizontal: 4, fontWeight: '700' }}>
								{this.state.result.operand2}
							</Text>
						</View>
						<Options options={this.state.result.options} />
						<SkipButton />
					</View>
				)}
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
	},
};
