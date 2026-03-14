// 3316 - Find Maximum Removals From Source String

function maxRemovals(source, pattern, targetIndices) {
    const arr = targetIndices, m = arr.length, n = pattern.length;
    const dp = new Uint16Array(n + 1).fill(5000);
    dp[0] = 0;
    for (let i = 0, j = 0; i < source.length; i++) {
        while (j < m && i > arr[j]) j++;
        const s = source[i], d = Number(j < m && i === arr[j]);
        for (let k = n; k; k--) {
            if (pattern[k - 1] !== s) continue;
            dp[k] = Math.min(dp[k - 1] + d, dp[k]);
        }
    }
    return m - dp[n];
}
