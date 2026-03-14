// 1794 - Count Pairs of Equal Substrings With Minimum Difference

function countQuadruples(firstString, secondString) {
    const indices1 = new Array(26);
    for (let i = 0; i < firstString.length; i++) {
        indices1[firstString.charCodeAt(i) - 97] ??= i;
    }
    const indices2 = new Array(26);
    for (let i = secondString.length - 1; ~i; i--) {
        indices2[secondString.charCodeAt(i) - 97] ??= i;
    }
    let quadruples = 0, min = Infinity;
    for (let i = 0; i < 26; i++) {
        const diff = indices1[i] - indices2[i];
        if (isNaN(diff)) continue;
        if (diff === min) quadruples++;
        if (diff < min) quadruples = 1, min = diff;
    }
    return quadruples;
}
