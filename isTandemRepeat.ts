function isTandemRepeat(inputString: string): boolean {

    let halfway = Math.floor(inputString.length / 2);
    
    return inputString.slice(0,halfway) === inputString.slice(halfway);
    
}

console.log( isTandemRepeat( 'aabaab' ) );
console.log( isTandemRepeat( 'aabaabaab' ) );
console.log( isTandemRepeat( 'aabaabaabaab' ) );
console.log( isTandemRepeat( 'aabaabaabaabaab' ) );