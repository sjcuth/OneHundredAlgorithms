function fancyRide(distance: number, ratesArray: number[]): string {

	const carArray = ['UberX','UberXL','UberPlus','UberBlack','UberSUV'];
	let maxIndex = 0;
	if (ratesArray[0] * distance > 20) {
		return 'None';
	}
	for ( let i = 0; i < ratesArray.length; i++ ) {		
		if (ratesArray[i] * distance <= 20) {
			maxIndex = i;
		} else {
			break;
		}
	}
	return carArray[maxIndex];

}

console.log( fancyRide( 30, [0.5,0.6,0.7,1.0,1.3] ) );