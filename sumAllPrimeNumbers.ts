function sumAllPrimes( n: number ): number {

    let sumTotal = 0;
    
    for ( let i = 2; i <= n; i++ ) {
        if ( isPrime(i)  ) {
            sumTotal += i;
        }
    }
    
    return sumTotal;
    
}
    
function isPrime(number: number): boolean {
    if ( number <= 1 ) {
        return false;
    }
    
    for (let i = 2; i <= Math.floor(number ** 0.5); i++) {
        if ( number % i === 0 ) {
            return false;
        }
    }
    return true;
}

console.log( sumAllPrimes( 10 ) ); //17
console.log( sumAllPrimes( 977 ) ); //73156