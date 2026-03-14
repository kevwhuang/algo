// 3622 - Check Divisibility by Digit Sum and Product

function checkDivisibility(n) {
    let sum = 0, prod = 1, cur = n;
    while (cur) sum += cur % 10, prod *= cur % 10, cur = cur / 10 >> 0;
    return n % (sum + prod) === 0;
}
