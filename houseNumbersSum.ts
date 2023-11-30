function houseNumbersSum(numberArray: number[]): number {

    let totalSum = 0;
    
    for (let i = 0; i < numberArray.length; i++) {
        
        if ( numberArray[i] != 0 ) {
            totalSum += numberArray[i];
        } else {
            return totalSum;
        }
        
        
    }
    
}

console.log( houseNumbersSum( [5,3,1,2,0,5,3,4,7,6,0,7] ) );
console.log( houseNumbersSum( [5,3,1,2,0] ) );