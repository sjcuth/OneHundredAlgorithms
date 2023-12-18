function stolenLunch( inputString: string ): string {

    let outputString = '';
    
    for (let i = 0; i < inputString.length; i++) {
    
        if (inputString[i].charCodeAt(0) >= 48 & inputString[i].charCodeAt(0) <= 57) {
            outputString += String.fromCharCode( inputString[i].charCodeAt(0) + 49 );
        } else if (inputString[i].charCodeAt(0) >= 97 & inputString[i].charCodeAt(0) <= 106) {
            outputString += String.fromCharCode( inputString[i].charCodeAt(0) - 49 );
        } else {
            outputString += inputString[i];
        }
    
    }
    
    return outputString;
}

console.log( stolenLunch( 'abcdefghijklmnopqrstuvwxyz 0123456789' ) );