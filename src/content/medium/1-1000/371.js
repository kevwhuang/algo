// 371 - Sum of Two Integers

function getSum(a, b) {
    while (a) [a, b] = [(a & b) << 1, a ^ b];
    return b;
}
