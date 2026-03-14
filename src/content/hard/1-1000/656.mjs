// 656 - Coin Path

function cheapestJump(coins, maxJump) {
    const n = coins.length;
    const dp = new Uint32Array(n).fill(100000).fill(coins[n - 1], n - 1, n);
    const ind = new Uint16Array(n).fill(n);
    for (let i = n - 2; ~i; i--) {
        const w = coins[i];
        if (w === -1) continue;
        const min = Math.min(i + maxJump, n - 1);
        for (let j = i + 1; j <= min; j++) {
            const next = dp[j] + w;
            if (next < dp[i]) dp[i] = next, ind[i] = j;
        }
    }
    const res = [1];
    while (ind[res.at(-1) - 1] < n) res.push(ind[res.at(-1) - 1] + 1);
    return dp[0] < 100000 ? res : [];
}
