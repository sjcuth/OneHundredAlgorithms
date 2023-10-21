function fareEstimator(minutes: number, distance: number, minuteArray: number[], distanceArray: number[]): number[] {

	let returnArray: number[] = [];

	for ( let i = 0; i < distanceArray.length; i++ ) {		

		returnArray.push( Math.round(  (distance * distanceArray[i] + minutes * minuteArray[i]) * 10  ) / 10  );

	}
	return returnArray;

}

console.log( fareEstimator( 30, 7, [0.2,0.35,0.4,0.45], [1.1,1.8,2.3,3.5] ) );