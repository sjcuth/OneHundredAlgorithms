function digitDegree(inputNumber: number): number {
	let degree = 0;
	let digitArray: number[] = [];

	while (inputNumber > 9) {
		digitArray = inputNumber.toString().split('').map( (element) => parseInt(element) );
		inputNumber = digitArray.reduce( (sum,num) => sum + num );
		degree++;

	}

	return degree;

}

console.log( digitDegree( 199 ) );
console.log( digitDegree( 5 ) );
console.log( digitDegree( 24 ) );
console.log( digitDegree( 99 ) );