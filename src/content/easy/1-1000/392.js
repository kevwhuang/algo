// 392 - Is Subsequence

function isSubsequence(s, t) {
    const m = s.length, n = t.length;
    if (m > n) return false;
    let i = 0, j = -1;
    while (++j < n) if (s[i] === t[j]) i++;
    return i === m;
}
