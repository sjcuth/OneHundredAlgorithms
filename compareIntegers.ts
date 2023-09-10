function compareIntegers(a: string, b: string): string {

    return parseInt(a) < parseInt(b) ? 'less' : parseInt(a) > parseInt(b) ? 'greater' : 'equal';

}

console.log( compareIntegers( '123',  '456' ) );
console.log( compareIntegers( '456',  '123' ) );
console.log( compareIntegers( '1000',  '1000' ) );