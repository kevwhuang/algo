// 1147 - Longest Chunked Palindrome Decomposition

function longestDecomposition(text) {
    let res = 0, l = 0, r = text.length, d = 1;
    while (l + d < r) {
        const flag = text[l] === text[r - d] && text[l + d - 1] === text[r - 1];
        if (!flag || text.slice(l, l + d) !== text.slice(r - d, r)) d++;
        else res += 2, l += d, r -= d, d = 1;
    }
    return l + d === r ? res + 1 : res;
}
