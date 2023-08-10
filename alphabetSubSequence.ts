function alphabetSubSequence(inputString: string): boolean {

	let inputArray: string[] = inputString.split('');
	for (let i = 1; i < inputArray.length; i++) {
		if ( inputArray[i] <= inputArray[i-1] ) {
			return false;
		}
	}
	return true;

}

console.log(alphabetSubSequence('effg'));
console.log(alphabetSubSequence('cdce'));
console.log(alphabetSubSequence('ace'));
console.log(alphabetSubSequence('bxz'));