function properNounCorrection(inputString: string): string {

    return inputString.length <= 1 ? inputString.toUpperCase() : inputString[0].toUpperCase() + inputString.slice(1).toLowerCase();
    
}

console.log( properNounCorrection( 'pArIs' ) );
console.log( properNounCorrection( 'John' ) );
console.log( properNounCorrection( 'i' ) );
console.log( properNounCorrection( '' ) );


