// 1768 - Merge Strings Alternately

function mergeAlternately(word1, word2) {
    let res = '', i = 0, j = 0;
    const m = word1.length, n = word2.length;
    while (i < m && j < n) res += word1[i++] + word2[j++];
    return res + word1.slice(i) + word2.slice(j);
}
