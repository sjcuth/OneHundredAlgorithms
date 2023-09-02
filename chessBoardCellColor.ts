function chessBoardCellColor(squareOne: string, squareTwo: string): boolean {

    const letters = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8};

    return (letters[squareOne[0]] + parseInt(squareOne[1])) % 2 === (letters[squareTwo[0]] + parseInt(squareTwo[1])) % 2
}

console.log( chessBoardCellColor("a1","a1") );
console.log( chessBoardCellColor("a1","c3") );
console.log( chessBoardCellColor("a1","h3") );

