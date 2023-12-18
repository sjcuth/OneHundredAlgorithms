function sumOfTwo( a: number[], b: number[], v: number ): boolean {

    let requiredNumbers = {};

    for ( let i = 0; i < a.length; i++ ) {
        requiredNumbers[ v - a[i] ] = 1;
    }

    console.log(requiredNumbers);

    for (let i = 0; i < b.length; i++) {
        if ( requiredNumbers.hasOwnProperty(b[i]) ) {
            return true;
        }
    }
    
    return false;
    
}

console.log( sumOfTwo( [1,2,3], [10,20,30,40], 32 ) );