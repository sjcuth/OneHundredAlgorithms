function avoidObstacles(inputArray: number[]): number {

    let i = 2;

    while (true) {
        
        for (let j = 0; j < inputArray.length; j++) {
            
            if ( inputArray[j] % i == 0 ) {
                break;
            }
            
            if ( j == inputArray.length - 1 ) {
                return i;
            }
            
        }

        i++;
    }

}


console.log( avoidObstacles([5,3,6,7,9,12,24,30,132,182]) );
console.log( avoidObstacles([5,3,6,7,9]) );