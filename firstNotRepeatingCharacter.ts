function firstNotRepeatingCharacter(inputString: string): string {

    let inputArray: string[] = inputString.split('');
    let inputObject = {};
    let returnCharArray = ['_'];
    
    for ( let i = 0; i < inputArray.length; i++ ) {
        if ( inputObject.hasOwnProperty( inputArray[i] ) ) {
            inputObject[ inputArray[i] ] += 1;
            
            if (inputObject[ inputArray[i] ] == 2) {
                let index = returnCharArray.indexOf(inputArray[i]);
                returnCharArray.splice(index,1);
            }
            
            
        } else {
            inputObject[ inputArray[i] ] = 1;
            returnCharArray.push( inputArray[i] );
        }
    }
    
    return returnCharArray.length == 1 ? returnCharArray[0] : returnCharArray[1];
    
    
}

console.log( firstNotRepeatingCharacter( 'abawdxaybzacxdc' ) );
console.log( firstNotRepeatingCharacter( 'abawdxaybzacxdcabawdxaybzacxdc' ) );