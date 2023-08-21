function arrayConversion(inputArray: number[]): number {

    let extraElement = inputArray.length % 2;
    let epochs = Math.ceil( Math.log2( inputArray.length ) );
    let currentArray: number[] = [...inputArray];
    
    for ( let e = 0; e < epochs; e++ ) {

        let newArray: number[] = [];

        if ( e % 2 == 0) {

            for ( let i = 0; i < currentArray.length ; i = i + 2) {

                if (extraElement == 1 && i == currentArray.length - 1) {
                    newArray.push( currentArray[i] );
                } else {
                    newArray.push( currentArray[i] + currentArray[i+1] );
                }
                
            }

        } else {

            for ( let i = 0; i < currentArray.length; i = i + 2) {
                console.log(i);
                if (extraElement == 1 && i == currentArray.length - 1) {
                    newArray.push( currentArray[i] );
                } else {
                    newArray.push( currentArray[i] * currentArray[i+1] );
                }
            }

        }

        currentArray = [...newArray];
        extraElement = currentArray.length % 2;

    }

    return currentArray[0];
}


console.log( arrayConversion([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]) );