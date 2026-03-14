// 1754 - Largest Merge of Two Strings

function largestMerge(word1, word2) {
    let res = '', i = 0, j = 0;
    while (i < word1.length && j < word2.length) {
        res += word1.slice(i) > word2.slice(j) ? word1[i++] : word2[j++];
    }
    return res + word1.slice(i) + word2.slice(j);
}
