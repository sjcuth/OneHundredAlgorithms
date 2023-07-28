function addBorder(inputList: string[]): string[] {

    let outputList: string[] = [];
    const wallString = "*".repeat(inputList[0].length + 2);

    inputList.forEach( (element) => {
        outputList.push("*" + element + "*");
    } );

    outputList.push( wallString );
    outputList.unshift( wallString );

    return outputList;
}


console.log(addBorder(["abc", "def"]));