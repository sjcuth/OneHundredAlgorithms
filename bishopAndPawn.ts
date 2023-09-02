function bishopAndPawn(bishop: string, pawn: string): boolean {

    const letters = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8};

    let horizontalDistance = Math.abs( letters[bishop[0]] - letters[pawn[0]] );
    let verticalDistance = Math.abs( parseInt(bishop[1]) - parseInt(pawn[1]) );

    return horizontalDistance == verticalDistance;
}

console.log( bishopAndPawn("a1","a1") );