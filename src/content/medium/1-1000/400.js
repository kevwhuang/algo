// 400 - Nth Digit

function findNthDigit(n) {
    let base = 1, len = 1;
    while (n > 9 * base * len) {
        n -= 9 * base * len++;
        base *= 10;
    }
    return +String(base + --n / len >> 0)[n % len];
}
