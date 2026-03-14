// 2803 - Factorial Generator

function* factorial(n) {
    let prod = 1, cur = n ? 1 : 0;
    while (cur <= n) {
        yield prod;
        prod *= ++cur;
    }
}
