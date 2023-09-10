function chunkyMonkey(inputArray: any[], chunk: number): any[][] {

    let i: number = 0;
    let outputArray: any[][] = [];

    while (i < inputArray.length) {
        outputArray.push( inputArray.slice(i,i += chunk) );

    }

    return outputArray;

}

console.log( chunkyMonkey(['a','b','c','d'], 2) );
console.log( chunkyMonkey([0,1,2,3,4,5], 4) );