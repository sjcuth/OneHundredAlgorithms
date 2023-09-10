function commonCharacterCount(stringOne: string, stringTwo: string): number {
	let countChar: number = 0;
	let arrayOne: string[] = stringOne.split('');
	let arrayTwo: string[] = stringTwo.split('');
	let objectOne: object = {};
	let objectTwo: object = {};
	for ( let i = 0; i < arrayOne.length; i++ ) {
		if ( objectOne.hasOwnProperty(arrayOne[i]) ) {
			objectOne[ arrayOne[i] ] += 1;
		} else {
			objectOne[ arrayOne[i] ] = 1;
		}
	}

	for ( let i = 0; i < arrayTwo.length; i++ ) {
		if ( objectTwo.hasOwnProperty(arrayTwo[i]) ) {
			objectTwo[ arrayTwo[i] ] += 1;
		} else {
			objectTwo[ arrayTwo[i] ] = 1;
		}
	}
	for ( const key in objectOne  ) {
		if ( objectTwo.hasOwnProperty(key)  ) {
			countChar += objectOne[key] < objectTwo[key] ? objectOne[key] : objectTwo[key];
		}
	}
	return countChar;

}

console.log(commonCharacterCount( 'aabcc', 'cddac' ));
console.log(commonCharacterCount( 'aaaabdccc', 'cddbbbbbbac' ));