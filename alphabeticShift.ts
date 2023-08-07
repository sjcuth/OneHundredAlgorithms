function alphabeticShift(inputString: string): string {

    let inputList: string[] = inputString.split('');
    let outputList: string[] = [];

    inputList.forEach( (element) => {
        outputList.push( String.fromCharCode( (element.charCodeAt(0) - 96) % 26 + 1 + 96 ) );
    } );

    return outputList.join('');

}

console.log( alphabeticShift('crazy') );