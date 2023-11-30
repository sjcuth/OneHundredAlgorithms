function isLucky(ticketNumber: number): boolean {

    let ticketArray = ticketNumber.toString().split('');
    let sumDigits = 0;
    
    for (let i = 0; i < ticketArray.length / 2; i++) {
    
        sumDigits += parseInt(ticketArray[i]);
        sumDigits -= parseInt(ticketArray[ticketArray.length - 1 - i]);
    
    }
    
    return sumDigits === 0;
    
}

console.log( isLucky( 77 ) );
console.log( isLucky( 123456 ));
console.log( isLucky( 12394056 ));