function composeRanges(inputArray: number[]): string[] {

    let outputArray: string[] = [];
    let firstNumber: number = inputArray[0];
    let lastNumber: number = firstNumber;

    for ( let i = 0; i < inputArray.length; i++ ) {

        if ( inputArray[i] + 1 != inputArray[i+1] || i == inputArray.length - 1 ) {
            lastNumber = inputArray[i];   

            if (firstNumber == lastNumber) {
                outputArray.push( '' + firstNumber + '' );
            } else {
                outputArray.push( firstNumber + '=>' + lastNumber );
            }

            if (i < inputArray.length - 1) {
                firstNumber = inputArray[i+1];
                lastNumber = firstNumber;
            }

        }

    }

    return outputArray;
}
console.log( composeRanges([-1, 0, 1, 2, 6, 7, 9, 10]) );
console.log( composeRanges([-1, 0, 1, 2, 6, 7, 9]) );
console.log( composeRanges([-1, 1, 6, 9]) );
console.log( composeRanges([]) );