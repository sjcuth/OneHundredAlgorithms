function houseOfCats(totalLegs: number): number[] {

    let outputArray: number[] = [];
    
    for (let i = 0; i <= (totalLegs / 2); i++) {
    
        if ( (totalLegs - i * 2) % 4 == 0  ) {
            outputArray.push(i);
        }
    
    }
    
    return outputArray;
    
}

console.log( houseOfCats( 14 ) );
console.log( houseOfCats( 6 ) );
console.log( houseOfCats( 2 ) );