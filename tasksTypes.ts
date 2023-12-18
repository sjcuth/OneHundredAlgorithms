function tasksTypes(deadlines: number[], day: number): number[] {

    let [today, upcoming, later] = [0,0,0];

    for (let i=0; i < deadlines.length; i++) {
        if (deadlines[i] <= day) {
            today++;
        } else if (deadlines[i] >= day+1 && deadlines[i] <= day+7) {
            upcoming++;
        } else {
            later++;
        }
    }

    return [today, upcoming, later];
}


console.log( tasksTypes([1,2,3,4,5], 2) );