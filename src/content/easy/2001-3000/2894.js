// 2894 - Divisible and Non-Divisible Sums Difference

function differenceOfSums(n, m) {
    const sum = (1 + n) * n / 2;
    const divCount = ~~(n / m);
    const divSum = (m + m * divCount) * divCount / 2;
    return sum - 2 * divSum;
}
