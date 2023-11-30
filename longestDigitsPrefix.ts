function longestDigitsPrefix(inputString: string): string {

    let outputString = '';
    let i = 0;
    
    while ( '1234567890'.includes(inputString[i]) ) {
    
        outputString += inputString[i];
        i++;
    }
    
    return outputString;
    
}

console.log( longestDigitsPrefix( '1234abdf2345' ) );