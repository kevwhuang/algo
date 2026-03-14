// 3253 - Construct String With Minimum Cost (Easy)

function minimumCost(target, words, costs) {
    const dp = new Uint32Array(target.length + 1).fill(1e9);
    dp[0] = 0;
    for (let i = 0; i < target.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (!target.startsWith(words[j], i)) continue;
            const idx = i + words[j].length;
            dp[idx] = Math.min(dp[i] + costs[j], dp[idx]);
        }
    }
    return dp.at(-1) === 1e9 ? -1 : dp.at(-1);
}
