// 1940 - Longest Common Subsequence Between Sorted Arrays

function longestCommonSubsequence(arrays) {
    const len = arrays.length;
    const freqs = new Array(101).fill(0);
    for (let i = 0, cur; i < len; i++) {
        cur = arrays[i];
        for (let j = 0; j < cur.length; j++) {
            freqs[cur[j]]++;
        }
    }
    const subsequence = [];
    for (let n = 0; n <= 100; n++) {
        if (freqs[n] === len) subsequence.push(n);
    }
    return subsequence;
}
