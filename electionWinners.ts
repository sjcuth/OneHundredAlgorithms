function electionWinners(inputArray: number[], votersRemaining: number): number {
	let maxVotes = inputArray[0];
	let candidates = 0;

    maxVotes = Math.max(...inputArray);

    inputArray = inputArray.sort( (a,b) => b-a );

    console.log( inputArray );

    if ( inputArray[0] != inputArray[1] && votersRemaining == 0 ) {
        return  1;
    }

	for (let j = 0; j < inputArray.length; j++) {
		if ( inputArray[j] + votersRemaining > maxVotes ) {
			candidates++;
		}
	}
	return candidates;

}

console.log( electionWinners( [2, 5, 3, 2], 3 ) );
console.log( electionWinners( [5, 6, 6, 5], 0 ) );
console.log( electionWinners( [5, 5, 6, 5], 0 ) );
console.log( electionWinners( [5, 6, 6, 5], 1 ) );
console.log( electionWinners( [5, 5, 6, 5], 1 ) );