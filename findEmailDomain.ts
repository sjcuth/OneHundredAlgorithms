function findDomainName(validEmailAddress: string): string {

    return validEmailAddress.substring( validEmailAddress.lastIndexOf('@') + 1 );
    
}
    
console.log( findDomainName( 'dsfkj@fdshjk@yahoo.com' ) );