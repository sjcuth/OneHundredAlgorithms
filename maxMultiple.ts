function maxMultiple(divisor: number, bound: number): number {

    return Math.floor(bound / divisor) * divisor;
    
}

console.log( maxMultiple( 3, 10 ) );
console.log( maxMultiple( 7, 100 ) );