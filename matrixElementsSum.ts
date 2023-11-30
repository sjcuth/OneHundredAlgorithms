function matrixElementsSum(inputArray: number[][]): number {

    let totalCost = 0;
    let columnSet = new Set();
    
    for (let i = 0; i < inputArray.length; i++) {
        
        for (let j = 0; j < inputArray[0].length; j++) {
        
            if ( !columnSet.has(j) ) {
            
                if ( inputArray[i][j] > 0 ) {
                    totalCost += inputArray[i][j];
                } else {
                    columnSet.add(j);
                }
            
            }
            
            if ( columnSet.size == inputArray[0].length ) {
                break;
            }
        
        }
        
        if ( columnSet.size == inputArray[0].length ) {
            break;
        }
        
    }
    
    return totalCost;

}

console.log( matrixElementsSum( [ [1,0,0,0], [0,4,5,6], [7,8,0,9]] ) );