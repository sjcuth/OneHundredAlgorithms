function growingPlant(upSpeed: number, downSpeed: number, desiredLength: number): number {

    let currentLength = 0;
    let days = 0;
    
    while (currentLength < desiredLength) {
    
        days++;
        currentLength += upSpeed;
        
        if (currentLength >= desiredLength) {
            return days;
        }
        
        currentLength -= downSpeed;
    
    }
    
}

console.log( growingPlant( 100, 10, 910 ) );