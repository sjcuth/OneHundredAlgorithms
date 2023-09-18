function crossingSum( inputArray: number[][], rowNum: number, colNum: number ): number {

    let returnSum: number = 0;
    let colArray: number[] = [];
    
    returnSum += inputArray[rowNum].reduce( (sum, num) => sum+num );

    for (let i = 0; i < inputArray.length; i++ ) {
        colArray.push( inputArray[i][colNum] );
    }

    returnSum += colArray.reduce( (sum, num) => sum+num );

    returnSum -= inputArray[rowNum][colNum];

    return returnSum;

}


console.log( crossingSum([ [1,1,1,1], [2,2,2,2], [3,3,3,3] ], 1, 3) );

