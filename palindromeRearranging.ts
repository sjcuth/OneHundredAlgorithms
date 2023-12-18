function palindromeRearranging(inputString: string): boolean {

    let inputObject = {};
    let oddValues = 0;
    
    for (let i = 0; i < inputString.length ; i++ ) {
        
        if ( inputObject.hasOwnProperty(inputString[i]) ) {
            inputObject[ inputString[i] ] += 1;
        } else {
            inputObject[ inputString[i] ] = 1;
        }
    
    }
    
    for (const key in inputObject) {
        if ( (inputObject[key] % 2) === 1 ) {
            oddValues++;
        }
    }
    
    return oddValues <= 1;
    
}

console.log( palindromeRearranging( 'aabb' ) );
console.log( palindromeRearranging( 'aabc' ) );

