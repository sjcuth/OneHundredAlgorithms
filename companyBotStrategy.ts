function companyBotStrategy(resultsList: number[][]): number {
	let sumTime = 0;
	let countCorrect = 0;
	for ( let i = 0; i < resultsList.length; i++  ) {
		if ( resultsList[i][1] == 1 ) {
			sumTime += resultsList[i][0];
			countCorrect++;
		}
	}
	return countCorrect == 0 ? 0 : sumTime / countCorrect;

}

console.log(companyBotStrategy( [[3, 1], [4, 1], [6, 1], [5, 1]] ));
console.log(companyBotStrategy( [[3, 1], [4, 0], [6, -1], [5, 1]] ));
console.log(companyBotStrategy( [[3, -1], [4, 0], [6, -1], [5, 0]] ));