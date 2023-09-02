function candies(children: number, candies: number): number {
	return Math.floor( candies / children ) * children;

}

console.log(candies(7,20));
console.log(candies(3,10));