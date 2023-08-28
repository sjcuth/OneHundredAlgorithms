function arrayPreviousLess(inputArray: number[]): number[] {

    let outputArray: number[] = [-1];

    for ( let i = 1 ; i < inputArray.length; i++ ) {

        for ( let j = i-1; j > -1; j-- ) {

            if ( inputArray[j] < inputArray[i] ) {
                outputArray.push(inputArray[j]);
                break;
            }
            
            if (j == 0) {
                outputArray.push(-1);
            }
            
        }

    }

    return outputArray;
}


console.log( arrayPreviousLess([3,5,2,4,5]) );
console.log( arrayPreviousLess([0,5,1,8,3,2,6,0]) );