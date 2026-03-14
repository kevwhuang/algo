// 3015 - Count the Number of Houses at a Certain Distance I

function countOfPairs(n, x, y) {
    const res = new Array(n).fill(0);
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const d1 = j - i - 1;
            const d2 = Math.abs(i - x) + Math.abs(j - y);
            const d3 = Math.abs(i - y) + Math.abs(j - x);
            res[Math.min(d1, d2, d3)]++;
        }
    }
    for (let i = 0; i < n; i++) {
        res[i] *= 2;
    }
    return res;
}
