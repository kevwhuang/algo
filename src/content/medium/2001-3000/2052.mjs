// 2052 - Minimum Cost to Separate Sentence Into Rows

function minimumCost(sentence, k) {
    function dfs(i) {
        if (memo[i]) return memo[i];
        if (i + k >= n) return 0;
        let res = Infinity;
        const min = Math.min(i + k + 1, n);
        for (let j = i + 1; j < min; j++) {
            if (sentence[j] !== ' ') continue;
            res = Math.min((i + k - j) ** 2 + dfs(j + 1), res);
        }
        return memo[i] = res;
    }
    const n = sentence.length;
    const memo = new Uint32Array(n);
    return dfs(0);
}
