// 2901 - Longest Unequal Adjacent Groups Subsequence II

function getWordsInLongestSubsequence(words, groups) {
    const n = words.length;
    const dp = new Uint16Array(n).fill(1);
    const arr = new Uint16Array(n);
    let idx = 0, i = n;
    while (~--i) {
        const s = words[i];
        for (let j = i + 1; j < n; j++) {
            if (groups[i] === groups[j]) continue;
            const t = words[j];
            if (s.length !== t.length) continue;
            let flag, k = -1;
            while (++k < s.length) {
                if (s[k] === t[k]) continue;
                if (flag) k = 99;
                else flag = true;
            }
            if (k === 100) continue;
            const next = dp[j] + 1;
            if (next > dp[i]) dp[i] = next, arr[i] = j;
            if (next > dp[idx]) idx = i;
        }
    }
    const res = new Array(dp[idx]);
    res[0] = words[idx], i = 0;
    while (++i < res.length) idx = arr[idx], res[i] = words[idx];
    return res;
}
