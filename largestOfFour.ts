function largestOfFour(inputArray: number[][]): number[] {

    let outputArray: number[] = [];
    
    for ( let i = 0; i < inputArray.length; i++ ) {
        
        let largestValue = inputArray[i][0];
        
        for ( let j = 1; j < inputArray[i].length; j++ ) {
            largestValue = inputArray[i][j] > largestValue ? inputArray[i][j] : largestValue;
        }
        
        outputArray.push(largestValue);
        
    }
    
    return outputArray;
    
}

console.log( largestOfFour( [ [6,9,3,4],[6,9,15,4],[26,9,3,4],[6,9,3,104],  ] ) );