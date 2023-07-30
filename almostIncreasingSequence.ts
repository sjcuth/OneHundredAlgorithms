function almostIncreasingSequence(sequence: number[]): boolean {

    let penalty = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
            penalty++;
            if (  (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) || penalty >= 2  ) {
                return false;
            }
        }


    }

    return penalty <= 1;

}

console.log( almostIncreasingSequence([10,30,20,30,70,110]) );