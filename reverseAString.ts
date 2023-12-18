function reverseAString(inputString: string): string {

    return inputString.split('').reverse().join('');
}

console.log( reverseAString( 'abcdef ghijkl' ) );