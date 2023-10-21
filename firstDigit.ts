function firstDigit(inputString: string): string {

    let inputArray = inputString.split('');

    
    
    for ( let i = 0; i < inputArray.length; i++ ) {
        if ( '0123456789'.includes(inputArray[i]) ) {
            return inputArray[i];
        }
    }
        
}

console.log( firstDigit( 'fdghjk@y6h3o.com' ) );
console.log( firstDigit( 'f4d5gh' ) );