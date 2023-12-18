function sortByHeight( inputArray: number[] ): number[] {

    let outputArray = [];
    let j = 0;
    let personArray = inputArray.filter( (e) => (e != -1) ).sort( (a,b) => a-b );
    
    for (let i=0; i < inputArray.length; i++) {
        if (inputArray[i] == -1) {
            outputArray.push(-1);
        } else {
            outputArray.push(personArray[j]);
            j++;
        }
    }
    
    return outputArray;

}

console.log( sortByHeight( [-1, -1, 180, 150, -1, 170, 160, -1] ) );