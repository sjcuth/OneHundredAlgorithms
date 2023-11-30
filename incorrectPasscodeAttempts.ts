function incorrectPasscodeAttempts(password: string, attemptsArray: string[]): boolean {

    let incorrectAttemptCount = 0;
    
    for (let i = 0; i <= attemptsArray.length; i++) {
        
        if ( attemptsArray[i] != password  ) {
            incorrectAttemptCount++;
            if ( incorrectAttemptCount >= 10 ) {
                return true
            }
        } else {
            incorrectAttemptCount = 0;
        }
        
    }
    
    return false;
    
}

console.log( incorrectPasscodeAttempts( '1111', ['1111','2222','3333','4444','5555','6666','7777','7777','8888','9999','0000','1111'] ) );
console.log( incorrectPasscodeAttempts( '1111', ['1111','2222','3333','4444','5555','6666','7777','8888','9999','1111'] ) );
console.log( incorrectPasscodeAttempts( '1111', ['1111','2222','1111','3333','4444','5555','6666','7777','8888','9999','0000','1111'] ) );