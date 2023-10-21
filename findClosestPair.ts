function findClosestPair(inputArray: number[], targetSum: number): number {

    let indexDifference = inputArray.length;
    
    for ( let i = 0; i < inputArray.length; i++ ) {
    
        for ( let j = i+1; j < inputArray.length; j++ ) {

            if ( inputArray[i] + inputArray[j] == targetSum ) {
                indexDifference = (j-i) < indexDifference ? (j-i) : indexDifference;
            }
        
        }
        
    }
    
    if ( indexDifference == inputArray.length ) {
        return -1
    } else {
        return indexDifference;
    }
    
    
}
    
console.log( findClosestPair( [1,0,2,4,3,0], 5 ) );
    