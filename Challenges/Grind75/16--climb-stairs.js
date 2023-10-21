// My solution using Fibonacci DP
const climbStairsDp = (n, dp = {
    0: 1,
    1: 1
}, count = 1) => {
    if (n === count) {
        return dp[1];
    }
    count += 1;
    return climbStairs(n, dp = {
        0: dp[1],
        1: dp[0] + dp[1]
    }, count)
}

// Model Solution
const climbStairs = (n) => {
    let arr = [1, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
};