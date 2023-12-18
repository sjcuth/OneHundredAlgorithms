function switchLights( inputArray: number[] ): number[] {

    for ( let i = 0; i < inputArray.length; i++ ) {
    
        changeDigit = (inputArray.slice(i).reduce( (t,c) => t+c )) % 2;
        if ( changeDigit === 1 ) {
            inputArray[i] = !inputArray[i]+0;
        }
    }
    
    return inputArray;
    
}

console.log( switchLights( [1,1,1,1,1] ) );
console.log( switchLights( [1,1,0,1,1] ) );
console.log( switchLights( [1,0,0,1,0,1,1,1,1,0,0,1,0,1] ) );
console.log( switchLights( [0,0] ) );


