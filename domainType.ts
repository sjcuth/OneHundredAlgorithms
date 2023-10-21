function domainLookup(inputArray: string[]): string[] {
    
	const domainObject: any = { 'com':'commercial', 'org':'organization', 'net':'network', 'info':'information' };
	let outputArray: string[] = [];
    let instanceArray: string[] = [];

	for (let i = 0; i < inputArray.length; i++) {
        instanceArray = inputArray[i].split('.');
		outputArray.push( domainObject[ instanceArray[ instanceArray.length - 1 ] ]  );
	}

	return outputArray;

}

console.log( domainLookup( ['yahoo.com','en.wiki.org','microsoft.net','education.info'] ) );