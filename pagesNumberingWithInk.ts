function pageNumberingWithInk(firstPage: number, digits: number): number  {

    let lastPage = firstPage;
    digits -= lastPage.toString().length;
    
    while ( digits > 0 ) {
        let nextPage = lastPage + 1;
        if ( nextPage.toString().length <= digits ) {
            lastPage++;
        }
        digits -= lastPage.toString().length;
        
    }
    
    
    return lastPage;
    
}

console.log( pageNumberingWithInk( 1, 3 ) );
console.log( pageNumberingWithInk( 1, 5 ) );
console.log( pageNumberingWithInk( 21, 5 ) );
console.log( pageNumberingWithInk( 8, 4 ) );