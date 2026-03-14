// 521 - Longest Uncommon Subsequence I

function findLUSlength(a, b) {
    return a === b ? -1 : Math.max(a.length, b.length);
}
