const getOperandLegth = () => {
	return Math.floor(Math.random() * 5);
};

const getRandomOperator = () => {
	const operators = ['+', '-', '*', '/', '%'];
	return operators[Math.floor(Math.random() * 5)];
};

const getRandomOperand = length => {
	let value = 1;
	for (let index = 0; index < length; index++) {
		value *= 10;
	}
	return Math.floor(Math.random() * value) + 1;
};

const getRandomOption = (options, result, index) => {
	console.log('numbers calling  : getRandomOption result ', result);
	let value = getRandomOperand(result.toString().length - 1);
	options[index] = value;
	// console.log('numbers calling  : getRandomOption value ', value);

	// if (result < 0) {
	// 	value = 0 - value;
	// }
	// let valueIndex = options.findIndex(item => item === value);
	// if (valueIndex === -1) {
	// 	options[index] = value;
	// 	return;
	// } else {
	// 	return getRandomOption(options, result, index);
	// }
};

const getResult = () => {
	const length = getOperandLegth();
	const operand1 = getRandomOperand(length);
	const operand2 = getRandomOperand(length);
	console.log('numbers operand1 : ', operand1);
	console.log('numbers operand2 : ', operand2);
	const operator = getRandomOperator();
	console.log('numbers operator : ', operator);
	let result;

	switch (operator) {
		case '+':
			result = operand1 + operand2;
			break;
		case '-':
			result = operand1 - operand2;
			break;
		case '*':
			result = operand1 * operand2;
			break;
		case '/':
			result = operand1 / operand2;
			break;
		case '%':
			result = operand1 % operand2;
			break;
		default:
			result = undefined;
	}
	console.log('numbers result : ', result);
	result = Math.floor(result);
	let options = [];
	let resultPosition = Math.floor(Math.random() * 4);
	for (let index = 0; index < 4; index++) {
		if (index === resultPosition) {
			console.log('numbers position : ', index);
			options[index] = result;
		} else {
			getRandomOption(options, result, index);
		}
	}

	console.log('numbers options : ', options);
	return {
		value: result,
		operand1: operand1,
		operand2: operand2,
		operator: operator,
		options: options,
		resultPosition: resultPosition,
	};
};

export default getResult;
