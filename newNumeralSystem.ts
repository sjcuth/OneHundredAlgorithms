function newNumberSystem(inputLetter: string): string[] {

    let outputArray: string[] = [];
    
    let inputNumber = inputLetter.charCodeAt(0) - 65;
    
    for (let i = 0; i < Math.ceil( (inputNumber+1) / 2) ; i++ ) {
        outputArray.push( String.fromCharCode(i + 65) + ' + ' + String.fromCharCode(inputNumber - i + 65)  );
    }
    
    return outputArray;
    
}

console.log( newNumberSystem( 'A' ) );
console.log( newNumberSystem( 'B' ) );
console.log( newNumberSystem( 'C' ) );
console.log( newNumberSystem( 'D' ) );
console.log( newNumberSystem( 'E' ) );
console.log( newNumberSystem( 'F' ) );
console.log( newNumberSystem( 'G' ) );