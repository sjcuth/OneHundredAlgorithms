function squareDigitsSequence( n: number ): number {

    let resultArray: number[] = [];
    let currentNumber: number = n;
    let iterations = 1;
    
    while ( !resultArray.includes(currentNumber) ) {
        resultArray.push(currentNumber);
        currentNumber = currentNumber.toString().split('').map( (e) => parseInt(e) ).reduce( (total, current) => total + (current ** 2), 0 );
        iterations++;
    }
    
    return iterations;
    
}

console.log( squareDigitsSequence( 16 ) );
console.log( squareDigitsSequence( 103 ) );