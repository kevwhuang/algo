// 1713 - Minimum Operations to Make a Subsequence

function minOperations(target, arr) {
    if (!this.dp) dp = new Uint32Array(100000);
    const map = new Map(), m = target.length, n = arr.length;
    for (let i = 0; i < m; i++) {
        if (!map.has(target[i])) map.set(target[i], i);
    }
    let i = -1, j = 0;
    while (++i < n) {
        const tgt = map.get(arr[i]);
        if (tgt === undefined) continue;
        let l = 0, r = j - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (dp[m] < tgt) l = m + 1;
            else r = m - 1;
        }
        dp[l] = tgt, j = Math.max(l + 1, j);
    }
    return m - j;
}
