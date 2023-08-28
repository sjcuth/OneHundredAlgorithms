function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    let returnValue: number = Math.abs( inputArray[0] - inputArray[1] );

    for (let i = 1; i < inputArray.length - 1; i++) {

        returnValue = Math.abs(inputArray[i] - inputArray[i+1]) > returnValue ? Math.abs(inputArray[i] - inputArray[i+1]) : returnValue;

    }

    return returnValue;

}


console.log( arrayMaximalAdjacentDifference([2,4,9,1,0,-4]) );