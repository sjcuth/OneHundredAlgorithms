function isCaseInsensitivePalindrome(inputString: string): boolean {

	inputString = inputString.toLowerCase();
	let reverseString: string = inputString.split('').reverse().join('');
	return inputString == reverseString;

}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));