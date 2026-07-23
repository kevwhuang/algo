// 3983. Subsequence After One Replacement

function canMakeSubsequence(s, t) {
    const m = s.length, n = t.length;
    if (m > n) return false;
    for (let i = 0, j = 0, k = 0; k < n; k++) {
        j = Math.max(i + 1, j + (s[j] === t[k]));
        if (j === m) return true;
        if (s[i] === t[k]) i++;
    }
    return false;
}
