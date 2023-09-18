function containsCloseNumbers(inputArray: number[], k: number): boolean {
	for ( let i = 0; i < inputArray.length - k ; i++) {

		if ( inputArray.slice(i+1,i+k+1).some( (element) => element == inputArray[i]  ) ) {
			return true;
		}

	}


	return false;
}

console.log( containsCloseNumbers( [0,1,2,3,5,2], 2 ) );
console.log( containsCloseNumbers( [0,1,2,3,5,2], 3 ) );