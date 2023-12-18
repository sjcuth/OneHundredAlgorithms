function missingLetters(inputString: string): string {

    if ( inputString.charCodeAt( inputString.length - 1 ) - inputString.charCodeAt(0) + 1 === inputString.length ) {
        return undefined;
    } else {
    
        for (let i = 1; i < inputString.length; i++) {
        
            if ( inputString.charCodeAt(i) - inputString.charCodeAt(i-1) != 1 ) {
                return String.fromCharCode( inputString.charCodeAt(i) - 1 );
            }
        
        }
    
    }
    
}

console.log( missingLetters( 'bce' ) );
console.log( missingLetters( 'abce' ) );
console.log( missingLetters( 'abcde' ) );
console.log( missingLetters( 'abcdefghjklmnopqrstuvwxyz' ) );
console.log( missingLetters( 'abcdefghijklmnopqrstuvwxyz' ) );