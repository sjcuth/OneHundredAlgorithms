function allLongestStrings(inputArray: string[]): string[] {

    let outputArray: string[] = [];
    let maxLength: number = 0;

    for (let i = 0; i < inputArray.length; i++ ) {
        maxLength = inputArray[i].length > maxLength ? inputArray[i].length : maxLength;
    }

    for (let j = 0; j < inputArray.length; j++ ) {
        if ( inputArray[j].length === maxLength ) {
            outputArray.push( inputArray[j] );
        }
    }   

    return outputArray;
}

console.log(allLongestStrings(["abc","aa","ad","vcd","aba"]));