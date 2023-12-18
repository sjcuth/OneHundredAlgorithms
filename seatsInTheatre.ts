function seatsInTheatre(ncols: number, nrows: number, col: number, row: number): number {

    return (nrows - row) * (ncols - col + 1);
}

console.log( seatsInTheatre( 16, 11, 5, 3 ) );