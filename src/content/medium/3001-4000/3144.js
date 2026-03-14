// 3144 - Minimum Substring Partition of Equal Character Frequency

function minimumSubstringsInPartition(s) {
    const n = s.length;
    const dp = new Uint16Array(n).fill(n);
    const B = new Uint16Array(26);
    for (let r = 0; r < n; r++) {
        B.fill(0);
        for (let acc = 0, max = 0, l = r; ~l; l--) {
            const key = s.charCodeAt(l) - 97;
            if (B[key] === 0) acc++;
            max = Math.max(++B[key], max);
            if (acc * max > r - l + 1) continue;
            dp[r] = l ? Math.min(dp[l - 1] + 1, dp[r]) : 1;
        }
    }
    return dp[n - 1];
}
