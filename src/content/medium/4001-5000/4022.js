// 4022. Kth Digit in Infinite String

function kthDigit(k) {
    let n = 1, cur = 1;
    while (k > 9 * n * cur) k -= 9 * n++ * cur, cur *= 10;
    cur += Math.floor(--k / n);
    const div = Math.floor(cur / 10);
    if (div & 1) cur = 10 * div + 9 - cur % 10;
    return Number(String(cur)[k % n]);
}
