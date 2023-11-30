function lateRide(minutes: number): number {

    let hourPart = Math.floor(minutes / 60);
    let minutePart = minutes - hourPart * 60;
    let bikeMeter = hourPart.toString() + minutePart.toString();
    let outputNumber = 0;
    
    for ( let i = 0; i < bikeMeter.length; i++ ) {
    
        outputNumber += parseInt( bikeMeter[i] );
    
    }
    
    return outputNumber;
    
}

console.log( lateRide( 273 ) );
console.log( lateRide( 958 ) );
console.log( lateRide( 240 ) );
console.log( lateRide( 808 ) );