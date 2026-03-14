// 3460 - Longest Common Prefix After at Most One Removal

function longestCommonPrefix(s, t) {
    let flag, i = 0, j = 0;
    const m = s.length, n = t.length;
    while (i < m && j < n) {
        if (s[i] === t[j]) i++, j++;
        else if (!flag) flag = true, i++;
        else break;
    }
    return i === j ? i : i - 1;
}
