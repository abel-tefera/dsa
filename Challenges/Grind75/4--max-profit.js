const maxProfit = function(prices) {
    let min = Number.POSITIVE_INFINITY;
    let max = -1;
    
    let maxRange = 0;

    for (let i = 0; i < prices.length; i++){
        if (prices[i] < min) {
            min = prices[i];
            max = -1;
        } 
        
        if (prices[i] > max) {
            max = prices[i]
        }

        const current = max - min;

        if (current > maxRange) {
            maxRange = max - min;
        }
    }

    return maxRange;
};

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([2, 4, 1])) // 0