function integerToStringOfFixedWidth(number: number, width: number): string {

    let outputString = '';
    let numberString = number.toString();
    
    for (let i = 0; i < width; i++) {
    
        outputString += i < (width - numberString.length) ? '0' : ( numberString[i - (width - numberString.length)] );
    
    }
    
    return outputString;
    
}

console.log( integerToStringOfFixedWidth( 1234, 0 ));
console.log( integerToStringOfFixedWidth( 1234, 1 ));
console.log( integerToStringOfFixedWidth( 1234, 2 ));
console.log( integerToStringOfFixedWidth( 1234, 3 ));
console.log( integerToStringOfFixedWidth( 1234, 4 ));
console.log( integerToStringOfFixedWidth( 1234, 5 ));
console.log( integerToStringOfFixedWidth( 1234, 6 ));
console.log( integerToStringOfFixedWidth( 1234, 7 ));