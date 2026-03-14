// 3413 - Maximum Coins From K Consecutive Bags

function maximumCoins(coins, k) {
    let res = 0;
    const M = coins.sort((a, b) => a[0] - b[0]), n = M.length;
    for (let acc = 0, left = M[0][0], l = 0, r = 0; r < n; r++) {
        const right = M[r][1];
        while (right - left + 1 > k) {
            if (right - M[l][1] < k) {
                const next = right - k + 1;
                acc -= (next - left) * M[l][2], left = next;
                continue;
            }
            acc -= (M[l][1] - left + 1) * M[l][2], left = M[++l][0];
        }
        acc += (right - M[r][0] + 1) * M[r][2];
        res = Math.max(acc, res);
    }
    for (let acc = 0, right = M[n - 1][1], l = n - 1, r = n - 1; ~l; l--) {
        const left = M[l][0];
        while (right - left + 1 > k) {
            if (M[r][0] - left < k) {
                const next = left + k - 1;
                acc -= (right - next) * M[r][2], right = next;
                continue;
            }
            acc -= (right - M[r][0] + 1) * M[r][2], right = M[--r][1];
        }
        acc += (M[l][1] - left + 1) * M[l][2];
        res = Math.max(acc, res);
    }
    return res;
}
