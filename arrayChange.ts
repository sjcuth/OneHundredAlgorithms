function arrayChange(a: number[]): number {

    let currentNumber: number = a[0];
    let returnValue: number = 0

    for (let i = 1; i < a.length; i++) {
        if ( a[i] > currentNumber ) {
            currentNumber = a[i];
        } else {
            returnValue += currentNumber - a[i] + 1;
            currentNumber = currentNumber + 1;

        }
    }

    return returnValue;
}


console.log( arrayChange([1,1,1]) );
console.log( arrayChange([8,1,0]) );
console.log( arrayChange([100,0,0]) );
