function fermactor(n: number): number[] {
    
    for ( let i = 0; i < n; i++ ) {
    
        for ( let j = 0; j < i; j++ ) {
        
            if ( i**2 - j**2 == n ) {
                return [i, j];
            }
        
        }
    
    }
    
    return [-1,-1];
    
}
    
console.log( fermactor( 11 ) );
console.log( fermactor( 12 ) );
console.log( fermactor( 13 ) );
console.log( fermactor( 15 ) );
console.log( fermactor( 16 ) );
console.log( fermactor( 16 ) );
console.log( fermactor( 20 ) );
console.log( fermactor( 21 ) );
console.log( fermactor( 24 ) );
console.log( fermactor( 24 ) );
console.log( fermactor( 25 ) );
console.log( fermactor( 27 ) );
console.log( fermactor( 32 ) );
console.log( fermactor( 33 ) );
console.log( fermactor( 35 ) );
console.log( fermactor( 36 ) );
console.log( fermactor( 39 ) );
console.log( fermactor( 40 ) );
console.log( fermactor( 45 ) );
console.log( fermactor( 48 ) );
console.log( fermactor( 48 ) );
console.log( fermactor( 49 ) );
console.log( fermactor( 55 ) );
console.log( fermactor( 60 ) );
console.log( fermactor( 63 ) );
console.log( fermactor( 64 ) );
console.log( fermactor( 65 ) );
console.log( fermactor( 72 ) );
console.log( fermactor( 77 ) );
console.log( fermactor( 80 ) );
console.log( fermactor( 81 ) );
console.log( fermactor( 91 ) );
console.log( fermactor( 96 ) );
console.log( fermactor( 99 ) );
console.log( fermactor( 100 ) );