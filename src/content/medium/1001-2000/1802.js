// 1802 - Maximum Value at a Given Index in a Bounded Array

function maxValue(n, index, maxSum) {
    function sum(start, count) {
        const terms = Math.min(start, count);
        total += (2 * start - terms + 1) * terms / 2;
        if (count > start) total += count - start;
    }
    if (n === 1) return maxSum;
    let l = Math.floor(maxSum / n), r = maxSum, total;
    while (l <= r) {
        const m = l + r >> 1;
        total = m;
        sum(m - 1, index);
        sum(m - 1, n - index - 1);
        if (total < maxSum) l = m + 1;
        else if (total > maxSum) r = m - 1;
        else return m;
    }
    return l - 1;
}
