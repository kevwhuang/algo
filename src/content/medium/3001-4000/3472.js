// 3472 - Longest Palindromic Subsequence After at Most K Operations

function longestPalindromicSubsequence(s, k) {
    function dfs(l, r, acc) {
        if (acc < 0) return -1;
        if (l > r) return 0;
        if (l === r) return 1;
        if (memo[l][r][acc]) return memo[l][r][acc];
        if (s[l] === s[r]) return memo[l][r][acc] = dfs(l + 1, r - 1, acc) + 2;
        const abs = Math.abs(s.charCodeAt(l) - s.charCodeAt(r));
        const a = dfs(l + 1, r, acc);
        const b = dfs(l, r - 1, acc);
        const c = dfs(l + 1, r - 1, acc - Math.min(abs, 26 - abs)) + 2;
        return memo[l][r][acc] = Math.max(a, b, c);
    }
    const fn = () => Array.from({ length: s.length }, () => ({}));
    const memo = Array.from({ length: s.length }, fn);
    return dfs(0, s.length - 1, k);
}
