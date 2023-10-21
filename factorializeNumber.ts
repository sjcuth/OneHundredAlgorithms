function factorializeNumber(k: number): number {

	if (k <= 2) {
		return k;
	}
	let returnValue = 2;
	for (let i = 3; i <= k; i++) {

		returnValue *= i;
	}
	return returnValue;

}

console.log( factorializeNumber( 0 ) );
console.log( factorializeNumber( 1 ) );
console.log( factorializeNumber( 2 ) );
console.log( factorializeNumber( 3 ) );
console.log( factorializeNumber( 4 ) );
console.log( factorializeNumber( 5 ) );
console.log( factorializeNumber( 6 ) );
console.log( factorializeNumber( 7 ) );
console.log( factorializeNumber( 8 ) );
console.log( factorializeNumber( 9 ) );
console.log( factorializeNumber( 10 ) );