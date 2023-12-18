function ratingThreshold(threshold: number, ratings: number[][]): number[] {

    let outputArray = [];
    
    for (let i = 0; i < ratings.length; i++) {
        let averageRating = ratings[i].reduce( (total, current) => total + current ) / ratings[i].length;
        
        if (averageRating < threshold) {
            outputArray.push(i);
        }
    }
    
    return outputArray;
    
}

console.log( ratingThreshold( 3.5, [ [3,4], [3,3,3,4], [4] ] ) );