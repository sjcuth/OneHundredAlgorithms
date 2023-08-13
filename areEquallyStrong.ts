function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

    let yourSortedArray: number[] = yourLeft < yourRight ? [yourLeft, yourRight] : [yourRight, yourLeft];
    let friendsSortedArray: number[] = friendsLeft < friendsRight ? [friendsLeft, friendsRight] : [friendsRight, friendsLeft];

    return yourSortedArray[0] == friendsSortedArray[0] && yourSortedArray[1] == friendsSortedArray[1];
}


console.log(areEquallyStrong(4,6,6,4));