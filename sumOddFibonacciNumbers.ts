function sumOddFibonacciNums( n: number ): number {

    let fibArray = [1,1]
    
    while ( true ) {
        let nextElement = fibArray[ fibArray.length - 1 ] + fibArray[ fibArray.length - 2 ];
        
        if (nextElement <= n) {
            fibArray.push(nextElement);
        } else {
            break;
        }
    
    }
    
    return fibArray.reduce( (total, current) => {
    
        if (current % 2 === 1) {
            return current + total;
        } else {
            return 0 + total;
        }
    
    } );
    
}

console.log( sumOddFibonacciNums( 1 ) ); //2
console.log( sumOddFibonacciNums( 10 ) ); //10
console.log( sumOddFibonacciNums( 1000 ) ); //1785
console.log( sumOddFibonacciNums( 4000000 ) ); //4613732