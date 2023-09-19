// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

const fibonacciIterative = (n) => {
    let sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[1] + sequence[0]);
        sequence.shift(); 
    }
    return sequence.pop();
}

// Slow
const fibonacciRecursive = (n) => {
    if (n < 2) {
        return n
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

const fibonacciDp = (n, dp = {
    0: 0,
    1: 1
}, count = 1) => {
    if (n === count) {
        return dp[1];
    }
    count += 1;
    return fibonacciDp(n, dp = {
        0: dp[1],
        1: dp[0] + dp[1]
    }, count)
}

console.time('Iterative')
console.log(fibonacciIterative(1200));
console.timeEnd('Iterative')

// console.time('Recursive')
// console.log(fibonacciRecursive(1000));
// console.timeEnd('Recursive')

console.time('Dp')
console.log(fibonacciDp(1200));
console.timeEnd('Dp')
