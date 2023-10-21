function firstDuplicate(inputArray: number[]): number {

    let inputObject = {};
    
    for ( let i = 0; i < inputArray.length; i++ ) {
        if ( inputObject.hasOwnProperty( inputArray[i] ) ) {
            return inputArray[i];
        }

        inputObject[ inputArray[i] ] = 1;
        
    }
    
    return -1;
       
}
    
console.log( firstDuplicate( [2,1,3,5,3,2] ) );
console.log( firstDuplicate( [2,4,3,5,1] ) );