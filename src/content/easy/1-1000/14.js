// 14 - Longest Common Prefix

function longestCommonPrefix(strs) {
    let res = strs[0], i = 0;
    while (++i < strs.length) {
        const s = strs[i];
        let j = 0;
        while (j < res.length && j < s.length && res[j] === s[j]) j++;
        if (j < res.length) res = res.slice(0, j);
    }
    return res;
}
