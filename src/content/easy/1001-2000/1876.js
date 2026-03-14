// 1876 - Substrings of Size Three With Distinct Characters

function countGoodSubstrings(s) {
    let count = 0;
    for (let i = 2; i < s.length; i++) {
        if (s[i - 2] === s[i - 1]) continue;
        if (s[i - 2] === s[i]) continue;
        if (s[i - 1] === s[i]) continue;
        count++;
    }
    return count;
}
