function largestNumber(n: number): number {

    let outputString = '';
    
    for ( let i = 0; i < n; i++ ) {
        outputString += '9'
    }
    
    return parseInt(outputString);
    
}

console.log( largestNumber( 1 ) );
console.log( largestNumber( 2 ) );
console.log( largestNumber( 3 ) );
console.log( largestNumber( 4 ) );
console.log( largestNumber( 5 ) );
console.log( largestNumber( 6 ) );
console.log( largestNumber( 7 ) );
console.log( largestNumber( 8 ) );
console.log( largestNumber( 9 ) );