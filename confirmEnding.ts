function confirmEnding(checkString: string, targetString: string): boolean {

    return checkString.substring(checkString.length - targetString.length) === targetString;

}


console.log( confirmEnding('Abstraction', 'action') );
console.log( confirmEnding('Open sesame', 'pen') );
console.log( confirmEnding('Open sesame', 'bme') );