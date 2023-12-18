function uniqueDigitProducts(inputArray: number[]): number {

    let uniqueArray: number[] = [];

    for (let i = 0; i < inputArray.length; i++) {
        let calcProduct = product(inputArray[i]);

        if ( !uniqueArray.includes( calcProduct ) ) {
            uniqueArray.push(calcProduct);
        }
    }

    return uniqueArray.length;

}

function product(n: number): number {

    return n.toString().split('').map( (e) => parseInt(e) ).reduce( (t,c) => t*c );

}

console.log( uniqueDigitProducts([2,8,121,42,222,23]) );
console.log( product(222) );