function containsDuplicates(inputArray: number[]): boolean {
	inputArray = inputArray.sort( (a,b) => a-b );
	for ( let i = 0; i < inputArray.length - 1 ; i++) {
		if ( inputArray[i] == inputArray[i+1] ) {
			return true;
		}
	}

	return false;
}

console.log( containsDuplicates( [1,2,3,1] ) );
console.log( containsDuplicates( [3,1] ) );