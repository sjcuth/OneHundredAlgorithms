function evenDigitsOnly(inputNumber: number): boolean {
	let inputArray: number[] = inputNumber.toString().split('').map( (element) => parseInt(element) );
	return inputArray.every( (element) => element % 2 == 0 );

}

console.log( evenDigitsOnly( 467620 ) );

