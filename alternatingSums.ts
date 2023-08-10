function alternatingSums(inputArray: number[]): number[] {
	let teamOneTotal: number = 0;
	let teamTwoTotal: number = 0;
	for ( let i = 0; i < inputArray.length; i++ ) {

		if ( i % 2 == 0 ) {
			teamOneTotal += inputArray[i]
		} else {
			teamTwoTotal += inputArray[i]
		}

	}
	return [ teamOneTotal, teamTwoTotal ];

}

console.log(alternatingSums([1,2,3,4,5,6,7]));