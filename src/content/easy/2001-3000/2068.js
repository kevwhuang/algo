// 2068 - Check Whether Two Strings Are Almost Equivalent

function checkAlmostEquivalent(word1, word2) {
    const bucket = new Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        bucket[word1.charCodeAt(i) - 97]++;
        bucket[word2.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (Math.abs(bucket[i]) > 3) return false;
    }
    return true;
}
