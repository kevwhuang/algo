// 3946. Maximum Number of Items From Sale I

function maximumSaleItems(items, budget) {
    if (!this.B) B = new Uint16Array(1501), dp = new Uint32Array(1501);
    B.fill(0);
    const map = new Map(), M = items, n = M.length;
    let max = 1, min = 1e9;
    for (let i = 0; i < n; i++) {
        const a = M[i][0];
        map.set(a, 0);
        B[a]++, max = Math.max(a, max), min = Math.min(M[i][1], min);
    }
    for (const d of map.keys()) {
        let sum = -1, i = d;
        while (i <= max) sum += B[i], i += d;
        map.set(d, sum);
    }
    dp.fill(0, 0, budget + 1);
    for (let i = 0; i < n; i++) {
        const a = map.get(M[i][0]) + 1, b = M[i][1];
        for (let j = budget; j >= b; j--) {
            dp[j] = Math.max(dp[j - b] + a, dp[j]);
        }
    }
    let res = 0;
    for (let i = 1; i <= budget; i++) {
        res = Math.max(dp[i] + (budget - i) / min | 0, res);
    }
    return res;
}
