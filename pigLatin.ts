function pigLatin(inputString: string): string {

    if ( 'aeiou'.includes(inputString[0]) ) {
        return inputString + 'way';
    }
    
    for ( let i = 1; i < inputString.length; i++ ) {
        if ( 'aeiou'.includes(inputString[i] ) ) {
            return inputString.slice(i) + inputString.slice(0,i) + 'ay';
        }
    }

    return '';
    
}

console.log( pigLatin( 'glove' ) );
console.log( pigLatin( 'eight' ) );
console.log( pigLatin( 'begger' ) );