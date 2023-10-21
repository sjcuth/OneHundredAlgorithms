function extractMatrixColumn(inputArray: number[][], k: number): number[] {
	let outputArray: number[] = [];
	for (let i = 0; i < inputArray.length; i++) {
		outputArray.push( inputArray[i][k] );
	}
	return outputArray;

}

console.log( extractMatrixColumn( [ [1,2,3,4], [5,6,7,8], [9,0,1,2]  ], 1 ) );