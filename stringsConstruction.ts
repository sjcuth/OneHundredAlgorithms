function stringsConstruction( a: string, b: string ): number {

    let stringsCount = b.length;

    let aObject = createObject(a);
    console.log(aObject);
    let bObject = createObject(b);
    console.log(bObject);

    for (let key in aObject) {
        if bObject.hasOwnProperty(key) {
            let times = Math.floor(bObject[key] / aObject[key]);
            console.log(times);
            stringsCount = times < stringsCount ? times : stringsCount;
        } else {
            return 0;
        }


    }
    
    return stringsCount;
}

function createObject(word: string): object {
    let counterObject = {};
    for (let i = 0; i < word.length; i++) {
    
        if ( counterObject.hasOwnProperty( word[i] ) ) {
            counterObject[ word[i] ]++;
        } else {
            counterObject[ word[i] ] = 1;
        }
        
    }
    return counterObject;
}

console.log( stringsConstruction( 'abcddd', 'abcabcddd' ) );