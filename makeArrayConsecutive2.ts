function makeArrayConsecutive2(sizeArray: number[]): number {

    sizeArray.sort( (a,b) => a - b );
    
    return sizeArray[ sizeArray.length - 1 ] - sizeArray[0] + 1 - sizeArray.length;
    
    
}

console.log( makeArrayConsecutive2( [2,7,8,5] ) );
console.log( makeArrayConsecutive2( [2,14,7,8,5] ) );