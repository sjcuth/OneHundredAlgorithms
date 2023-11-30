function launchSequence(codeArray: string[], timeArray: number[]): boolean {

    let trackerObject = {};
    
    for ( let i = 0; i < codeArray.length; i++ ) {
        if (trackerObject.hasOwnProperty(codeArray[i])) {
        
            if ( timeArray[i] > trackerObject[ codeArray[i] ] ) {
                trackerObject[ codeArray[i] ] = timeArray[i];
            } else {
                return false;
            }
        
        } else {
            trackerObject[ codeArray[i] ] = timeArray[i];
        }
        
    }
    
    return true;
    
}

console.log( launchSequence( ['a','b','c','a','b','c'], [1,20,300,4,21,600] ) );