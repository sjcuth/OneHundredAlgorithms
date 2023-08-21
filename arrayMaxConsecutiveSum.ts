function arrayMaxConsecutiveSum(inputArray: number[], k:number): number {

    let returnValue:number = inputArray.slice(0,k).reduce( (a,b) => a+b );

    for (let i = 1; i < inputArray.length - k + 1; i++) {
        console.log(i);
        returnValue = inputArray.slice(i,i+k).reduce( (a,b) => a+b ) > returnValue ? inputArray.slice(i,i+k).reduce( (a,b) => a+b ) : returnValue;
    }

    return returnValue;

}


console.log( arrayMaxConsecutiveSum([2,3,5,1,6],5) );
console.log( arrayMaxConsecutiveSum([2,7,8,2,4,1,6,8,3,3,5,1,6],7) );