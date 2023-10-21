function excludeKthElement(inputArray: number[], k: number): number[] {
	return inputArray.filter( (element, index) => index % k != k-1  ) ;

}

console.log( excludeKthElement( [10,9,8,7,6,5,4,3,2,1,0], 3 ) );