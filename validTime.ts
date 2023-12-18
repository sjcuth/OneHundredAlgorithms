function validTime(timeString: string): boolean {

    let hours = parseInt(timeString.split(':')[0]);
    let minutes = parseInt(timeString.split(':')[1]);

    return hours>=0 && hours<=23 && minutes>=0 && minutes<=59;

}


console.log( validTime('13:58') );
console.log( validTime('25:51') );
console.log( validTime('02:76') );
console.log( validTime('ab:cd') );
console.log( validTime('abc') );