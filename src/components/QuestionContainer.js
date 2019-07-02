import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
export default class QuestionContainer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View
					style={{
						height: 60,
						justifyContent: 'center',
						alignItems: 'center',
						padding: 4,
						backgroundColor: '#0D47A1',
						borderTopLeftRadius: 4,
						borderTopRightRadius: 4,
					}}
				>
					{this.props.children}
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						padding: 24,
						backgroundColor: '#000',
					}}
				>
					<View style={{ flexDirection: 'row', flex: 1 }}>
						<View
							style={{
								flex: 1,
								height: '100%',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: 4,
								borderWidth: 2,
								backgroundColor: '#F9A825',
							}}
						>
							<Text style={{ color: '#fff', fontSize: 20 }}>100</Text>
						</View>
						<View
							style={{
								flex: 1,
								height: '100%',

								backgroundColor: '',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: 4,
								borderWidth: 2,
								backgroundColor: '#F9A825',
							}}
						>
							<Text style={{ color: '#fff', fontSize: 20 }}>100</Text>
						</View>
					</View>

					{/* second row */}
					<View style={{ flexDirection: 'row', flex: 1 }}>
						<View
							style={{
								flex: 1,
								height: '100%',

								backgroundColor: '',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: 4,
								borderWidth: 2,
								backgroundColor: '#F9A825',
							}}
						>
							<Text style={{ color: '#fff', fontSize: 20 }}>100</Text>
						</View>
						<View
							style={{
								flex: 1,
								height: '100%',

								backgroundColor: '',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: 4,
								borderWidth: 2,
								backgroundColor: '#F9A825',
							}}
						>
							<Text style={{ color: '#fff', fontSize: 20 }}>100</Text>
						</View>
					</View>
				</View>
				<View style={{ height: 45, justifyContent: 'center', alignItems: 'center' }}>
					<LinearGradient
						colors={['#880E4F', '#C2185B']}
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							paddingHorizontal: 24,
							paddingVertical: 8,
							borderRadius: 4,
						}}
					>
						<TouchableOpacity>
							<Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>
								Skip, can't solve this
							</Text>
						</TouchableOpacity>
					</LinearGradient>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		width: '80%',
		height: '75%',
		backgroundColor: '#000',
		position: 'absolute',
		marginTop: 160,
		elevation: 20,
		zIndex: 200,
		shadowColor: '#ddd',
		shadowOffset: { width: 5, height: 45 },
		shadowOpacity: 0.2,
		borderRadius: 4,
		paddingBottom: 8,
	},
};
