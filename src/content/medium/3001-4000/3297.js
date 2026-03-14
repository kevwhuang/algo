// 3297 - Count Substrings That Can Be Rearranged to Contain a String I

function validSubstringCount(word1, word2) {
    let acc = 0;
    const B = new Uint32Array(26);
    for (let i = 0; i < word2.length; i++) {
        if (B[word2.charCodeAt(i) - 97]++ === 0) acc++;
    }
    let res = 0;
    for (let l = 0, r = 0; r < word1.length; r++) {
        if (B[word1.charCodeAt(r) - 97]-- === 1) acc--;
        while (acc === 0) {
            res += word1.length - r;
            if (B[word1.charCodeAt(l++) - 97]++ === 0) acc++;
        }
    }
    return res;
}
