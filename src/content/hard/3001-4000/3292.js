// 3292 - Minimum Number of Valid Strings to Form Target II

function minValidStrings(words, target) {
    const m = target.length;
    const arr = Array.from({ length: m }, () => new Set());
    for (let i = 0; i < words.length; i++) {
        const s = words[i], n = s.length;
        const lps = new Uint16Array(n);
        let l = 0, r = 1;
        while (r < n) {
            if (s[l] === s[r]) lps[r++] = ++l;
            else if (l) l = lps[l - 1];
            else r++;
        }
        let j = 0, k = -1;
        while (++k < m) {
            if (j === n) j = lps[j - 1];
            while (j && s[j] !== target[k]) j = lps[j - 1];
            if (s[j] === target[k]) j++;
            if (j) arr[k].add(j);
        }
    }
    const dp = new Uint16Array(m + 1).fill(60000);
    dp[m] = 0;
    for (let i = m; i; i--) {
        dp[i]++;
        if (arr[i - 1].size === 0) return -1;
        arr[i - 1].forEach(e => dp[i - e] = Math.min(dp[i], dp[i - e]));
    }
    return dp[0];
}
