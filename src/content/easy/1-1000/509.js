// 509 - Fibonacci Number

function fib(n) {
    const sqrt = Math.sqrt(5);
    const term1 = ((1 + sqrt) / 2) ** n / sqrt;
    const term2 = ((1 - sqrt) / 2) ** n / sqrt;
    return Math.round(term1 - term2);
}
