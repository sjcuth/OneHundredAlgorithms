function flattenArray(inputArray: any[]): any[] {

    let outputArray = [];
    
    for (let i = 0; i < inputArray.length; i++ ) {
    
    if ( Array.isArray(inputArray[i]) ) {
        outputArray = outputArray.concat( flattenArray(inputArray[i]) );
    } else {
        outputArray.push(inputArray[i]);
    }
    
    }
    
    return outputArray;
    
}

console.log( flattenArray( [1, [2, [3, 4] ] ] ) );
console.log( flattenArray( [1, [[[[2, [[[[3, 4]]]] ]]]] ] ) );
    