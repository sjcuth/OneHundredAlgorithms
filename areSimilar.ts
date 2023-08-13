function areSimilar(a: number[], b: number[]): boolean {

    let mismatchArray: number[] = [];

    if (a.length != b.length) {
        return false;
    }

    if (a.reduce((partialSum, x) => partialSum + x, 0) != b.reduce((partialSum, x) => partialSum + x, 0)) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if ( a[i] != b[i] ) {
            mismatchArray.push(i);
        }
    }

    if (mismatchArray.length > 2) {
        return false;
    }

    if (mismatchArray.length == 0) {
        return true;
    }

    return (a[mismatchArray[0]] == b[mismatchArray[1]] && a[mismatchArray[1]] == b[mismatchArray[0]]);
}

console.log( areSimilar([1,2,3,4,5,6,7,9,8], [1,2,3,4,5,6,7,8,9]) );