function depositProfit(deposit: number, rate: number, threshold: number): number {

    let amount: number = deposit;
    let periods: number = 0;

    while (amount < threshold) {

        amount += amount * (rate / 100);
        periods++;

    }
    
    return periods;
}

console.log( depositProfit(100, 20, 170) );
console.log( depositProfit(100, 10, 200) );