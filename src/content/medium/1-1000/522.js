// 522 - Longest Uncommon Subsequence II

function findLUSlength(strs) {
    function checkSubsequence(s1, s2) {
        let p1 = 0, p2 = 0;
        while (p1 < s1.length && p2 < s2.length) {
            if (s1[p1] === s2[p2++]) p1++;
        }
        return p1 === s1.length;
    }
    strs.sort((a, b) => b.length - a.length);
    for (let i = 0; i < strs.length; i++) {
        let hasSubsequence = false;
        for (let j = 0; j < strs.length; j++) {
            if (i === j) continue;
            if (!checkSubsequence(strs[i], strs[j])) continue;
            hasSubsequence = true;
            break;
        }
        if (!hasSubsequence) return strs[i].length;
    }
    return -1;
}
