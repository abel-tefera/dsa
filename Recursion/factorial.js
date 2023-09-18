const factorialIterative = (n) => {
    let ans = n;
    for (let i = n - 1; i >= 1; i--) {
        ans *= i;
    }
    return ans;
}

const factorialRecursive = (n) => {
    if (n == 1) return 1;
    return n * factorialRecursive(n - 1)
}

console.log(factorialIterative(5) === factorialRecursive(5));
