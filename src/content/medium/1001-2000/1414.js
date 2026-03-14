// 1414 - Find the Minimum Number of Fibonacci Numbers Whose Sum Is K

function findMinFibonacciNumbers(k) {
    const fib = [1, 1];
    while (fib[fib.length - 1] <= k) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    let count = 0, i = fib.length - 2;
    while (k) {
        if (k >= fib[i]) {
            k -= fib[i];
            count++;
        } else {
            i--;
        }
    }
    return count;
}
