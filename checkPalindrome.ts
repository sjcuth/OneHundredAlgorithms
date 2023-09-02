function checkPalindrome(inputString: string): boolean {

    inputString = inputString.toLowerCase();
	let reverseString: string = inputString.split('').reverse().join('');
	return inputString == reverseString;

}

console.log(checkPalindrome('AaBaaBaA'));
console.log(checkPalindrome('abA'));
console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));