function circleOfNumbers(nNodes: number, chosenNode: number): number {
	return (chosenNode + nNodes / 2) % nNodes;

}

console.log(circleOfNumbers(10,2));
console.log(circleOfNumbers(10,7));
console.log(circleOfNumbers(10,0));
console.log(circleOfNumbers(10,5));

console.log(circleOfNumbers(5,0));
console.log(circleOfNumbers(5,1));
console.log(circleOfNumbers(5,2));
console.log(circleOfNumbers(5,3));
console.log(circleOfNumbers(5,4));