function sortLengths( inputArray: string[] ): string[] {

    return inputArray.sort( (a,b) => a.length - b.length);
    
}

console.log( sortLengths( ['g','ef','ghi','def','cd','','abc','ab','d','','a'] ) );