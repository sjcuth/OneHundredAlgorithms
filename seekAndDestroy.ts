function seekAndDestory( inputArray: number[], elementsToRemove: number[]): number[] {

    // let outputArray = [];
    
    // for (let i = 0; i < inputArray.length; i++) {
    //     if ( !elementsToRemove.includes( inputArray[i] ) ) {
    //         outputArray.push( inputArray[i] );
    //     }
    // }
    
    // return outputArray;

    return inputArray.filter( (element) => !elementsToRemove.includes(element) );

}

console.log( seekAndDestory( [1,2,3,7,4,3,4,5,6], [2,4] ) );