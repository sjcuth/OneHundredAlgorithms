function reflectString(inputString: string): string {

    let outputString = '';
    
    for (let i = 0; i < inputString.length; i++) {
        outputString += String.fromCharCode( (inputString[i].charCodeAt(0) * -2 + 219) + inputString[i].charCodeAt(0) );
    }
    
    return outputString;
    
}

console.log( reflectString( 'abcxyz' ) );