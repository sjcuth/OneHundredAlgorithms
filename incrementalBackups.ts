function incrementalBackups(lastBackupTime: number, changesToFiles: number[][]): number[] {

    const files = new Set();
    

    for (let i: number = 0; i < changesToFiles.length; i++) {

        if ( changesToFiles[i][0] > lastBackupTime ) {
            files.add(changesToFiles[i][1]);
        }

    }

    return Array.from(files).sort();

}

console.log( incrementalBackups(461620205,  [ [461620203,1], [461620204,2], [461620205,6], 
                                                [461620206,5], [461620207,3], [461620207,5], [461620208,1], ] ) );