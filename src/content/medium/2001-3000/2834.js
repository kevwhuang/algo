// 2834 - Find the Minimum Possible Sum of a Beautiful Array

function minimumPossibleSum(n, target) {
    const count = Math.min(n, target / 2 >> 0);
    let sum = BigInt((1 + count) * count / 2);
    n = BigInt(n - count);
    sum += (2n * BigInt(target) + n - 1n) * n / 2n;
    return Number(sum % 1000000007n);
}
