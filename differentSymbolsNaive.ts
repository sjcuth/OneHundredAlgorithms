function differentSymbolsNaive(inputString: string): number {
	let charObject = {};
	for ( let i = 0; i < inputString.length; i++) {
		if ( charObject.hasOwnProperty(inputString[i]) ) {
			charObject[inputString[i]] += 1;
		} else {
			charObject[inputString[i]] = 1;
		}
	}

	return Object.keys(charObject).length;

}

console.log( differentSymbolsNaive( 'bcaabdbbb' ) );