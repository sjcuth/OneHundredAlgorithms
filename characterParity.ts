function characterParity(inputChar: string): string {

    if (inputChar.length != 1) {
        return 'not a digit';
    }

    if ( '1234567890'.includes(inputChar)  ) {
        
        if (parseInt(inputChar) % 2 == 0) {
            return 'even';
        } else {
            return 'odd';
        }

    }

    return 'not a digit';
}

console.log( characterParity('5') );
console.log( characterParity('8') );
console.log( characterParity('q') );
console.log( characterParity('45') );