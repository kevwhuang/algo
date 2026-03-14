// 2311 - Longest Binary Subsequence Less Than or Equal to K

function longestSubsequence(s, k) {
    k = k.toString(2);
    if (s.length < k.length) return s.length;
    let res = k.length;
    if (s.slice(-k.length) > k) res--;
    let i = s.length - k.length - 1;
    while (~i) if (s[i--] === '0') res++;
    return res;
}
