function addTwoDigits(inputNumber: number): number {

    return Math.floor(inputNumber/10) + inputNumber % 10;
}

console.log( addTwoDigits(99) );