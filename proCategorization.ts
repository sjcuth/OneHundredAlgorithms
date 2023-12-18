function prosMatching(pros: string[], tasks: string[][]): string[][][] {

    let matchingObject = {};
    let outputList = [];
    
    for ( let p = 0; p < pros.length; p++ ) {
        for ( let t = 0; t < tasks[p].length; t++) {
        
            if ( matchingObject.hasOwnProperty(tasks[p][t]) ) {
                matchingObject[tasks[p][t]].push(pros[p]);
            } else {
                matchingObject[tasks[p][t]] = [ pros[p] ];
            }
               
        }
    }
    
    for (let key in matchingObject) {
        outputList.push( [ [key], matchingObject[key] ] );
    }
    
    outputList = outputList.sort( (task1, task2) => {
        task1lower = task1[0][0].toLowerCase();
        task2lower = task2[0][0].toLowerCase();

        if (task1lower < task2lower) {
            return -1;
        }
        if (task1lower > task2lower) {
            return 1;
        }
        return 0;
    
    });

    return outputList;
}
    
console.log( prosMatching( 
        ['abby','ben','charles'], 
        [ ['Task d','task c','task a','task e'], 
        ['task c','Task d','task e'], 
        ['task c','Task d','task f'] ] ) );


