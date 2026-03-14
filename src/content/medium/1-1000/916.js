// 916 - Word Subsets

function wordSubsets(words1, words2) {
    function getFrequencies(word) {
        const freqs = new Array(26).fill(0);
        for (let i = 0; i < word.length; i++) {
            freqs[word.charCodeAt(i) - 97]++;
        }
        return freqs;
    }
    const maxFreqs = new Array(26).fill(0);
    for (let i = 0; i < words2.length; i++) {
        const freqs = getFrequencies(words2[i]);
        for (let j = 0; j < 26; j++) {
            maxFreqs[j] = Math.max(freqs[j], maxFreqs[j]);
        }
    }
    const universal = [];
    for (let i = 0; i < words1.length; i++) {
        let freqs = getFrequencies(words1[i]);
        for (let j = 0; j < 26; j++) {
            if (freqs[j] >= maxFreqs[j]) continue;
            freqs = null;
            break;
        }
        if (freqs) universal.push(words1[i]);
    }
    return universal;
}
