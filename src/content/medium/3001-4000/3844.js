// 3844 - Longest Almost Palindromic Substring

function almostPalindromic(s) {
    function check(acc, l, r, flag) {
        while (~l && r < n && s[l] === s[r]) acc += 2, l--, r++;
        if (l < 0 && r === n || flag) return acc;
        if (l < 0 && r < n || ~l && r === n) return acc + 1;
        return acc + Math.max(check(1, l - 1, r, 1), check(1, l, r + 1, 1));
    }
    let res = 2;
    const n = s.length;
    for (let i = 1; i < n; i++) {
        res = Math.max(check(1, i - 1, i + 1), res);
        if (s[i - 1] === s[i]) res = Math.max(check(2, i - 2, i + 1), res);
    }
    return res;
}
