// 647 - Palindromic Substrings

function countSubstrings(s) {
    let res = 0, i = -1, l, r;
    while (++i < s.length) {
        l = i, r = i;
        while (~l && r < s.length && s[l--] === s[r++]) res++;
        l = i, r = i + 1;
        while (~l && r < s.length && s[l--] === s[r++]) res++;
    }
    return res;
}
