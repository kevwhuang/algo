// 5 - Longest Palindromic Substring

function longestPalindrome(s) {
    let res = '', i = -1, l, r;
    while (++i < s.length) {
        l = i, r = i;
        while (~l && r < s.length && s[l] === s[r]) l--, r++;
        if (r - l - 1 > res.length) res = s.slice(l + 1, r);
        l = i, r = i + 1;
        while (~l && r < s.length && s[l] === s[r]) l--, r++;
        if (r - l - 1 > res.length) res = s.slice(l + 1, r);
    }
    return res;
}
