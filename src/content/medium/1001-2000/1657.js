// 1657 - Determine If Two Strings Are Close

function closeStrings(word1, word2) {
    if (word1.length !== word2.length) return false;
    const freqs1 = new Array(26).fill(0);
    const freqs2 = new Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        freqs1[word1.charCodeAt(i) - 97]++;
        freqs2[word2.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        if (freqs1[i] && !freqs2[i]) return false;
        if (freqs2[i] && !freqs1[i]) return false;
    }
    freqs1.sort((a, b) => a - b);
    freqs2.sort((a, b) => a - b);
    for (let i = 0; i < 26; i++) {
        if (freqs1[i] !== freqs2[i]) return false;
    }
    return true;
}
