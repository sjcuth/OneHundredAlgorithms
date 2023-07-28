function adjacentElementsProduct(inputArray: number[]): number {

    let maxProduct = inputArray[0] * inputArray[1];
	let currentProduct = 0;

	for (var i = 1; i < inputArray.length - 1; i++) {
			
			currentProduct = inputArray[i] * inputArray[i+1];
			
			maxProduct = currentProduct > maxProduct ? currentProduct : maxProduct;
 
	}
		
	return maxProduct;
}

console.log( adjacentElementsProduct([250,4,7,8,2,9,9,4,8,4,2000,7,100]) );