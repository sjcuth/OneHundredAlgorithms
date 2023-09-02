function boxBlur(image: number[][]): number[][] {
	let newImage: number[][] = [];
	for (let i = 1; i < image.length - 1; i++) {
		let newRow: number[] = [];

		for (let j = 1; j < image[i].length - 1; j++) {
			newRow.push( Math.floor( (image[i-1][j-1] + image[i-1][j] + image[i-1][j+1] + image[i][j-1] + image[i][j] + image[i][j+1] + image[i+1][j-1] + image[i+1][j] + image[i+1][j+1]) / 9 ) );
		}

		newImage.push(newRow);
	}

	return newImage;

}

console.log(boxBlur([ [1,1,1], [1,17,1], [1,1,1] ]));
console.log(boxBlur([ [1,2,3,4], [2,3,4,5], [3,4,20,6], [4,5,6,7]    ]));