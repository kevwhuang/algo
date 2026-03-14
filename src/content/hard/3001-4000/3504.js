// 3504 - Longest Palindrome After Substring Concatenation II

function longestPalindrome(s, t) {
    t = t.split``.reverse();
    const m = s.length, arr1 = new Uint16Array(m + 1);
    for (let i = 0, l, r; i < m; i++) {
        l = i, r = i;
        while (~l && r < m && s[l] === s[r]) {
            arr1[l] = Math.max(++r - l, arr1[l--]);
        }
        l = i, r = i + 1;
        while (~l && r < m && s[l] === s[r]) {
            arr1[l] = Math.max(++r - l, arr1[l--]);
        }
    }
    const n = t.length, arr2 = new Uint16Array(n + 1);
    for (let i = 0, l, r; i < n; i++) {
        l = i, r = i;
        while (~l && r < n && t[l] === t[r]) {
            arr2[l] = Math.max(++r - l, arr2[l--]);
        }
        l = i, r = i + 1;
        while (~l && r < n && t[l] === t[r]) {
            arr2[l] = Math.max(++r - l, arr2[l--]);
        }
    }
    let res = 0;
    const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const d = Number(s[i] === t[j]);
            if (d) dp[i + 1][j + 1] = dp[i][j] + 1;
            const max = Math.max(arr1[i + d], arr2[j + d]);
            res = Math.max(2 * dp[i + 1][j + 1] + max, res);
        }
    }
    return res;
}
