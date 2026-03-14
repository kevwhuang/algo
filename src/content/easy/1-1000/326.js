// 326 - Power of Three

function isPowerOfThree(n) {
    if (n <= 0) return false;
    const log = Math.log(n) / Math.log(3);
    return Math.abs(log - Math.round(log)) < 1e-10;
}
