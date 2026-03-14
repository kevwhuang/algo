// 3723 - Maximize Sum of Squares of Digits

function maxSumOfSquares(num, sum) {
    if (9 * num < sum) return '';
    const a = sum / 9 >> 0, b = sum - 9 * a;
    return ('9'.repeat(a) + (b ? b : '')).padEnd(num, '0');
}
