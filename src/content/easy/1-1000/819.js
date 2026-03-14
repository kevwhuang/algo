// 819 - Most Common Word

function mostCommonWord(paragraph, banned) {
    paragraph = paragraph.toLowerCase().split(/\W+/g);
    banned = new Set(banned);
    const map = new Map();
    let maxFreqWord, maxFreq = 0;
    for (let i = 0, word, freq; i < paragraph.length; i++) {
        word = paragraph[i];
        if (banned.has(word)) continue;
        freq = map.get(word) + 1 || 1;
        map.set(word, freq);
        if (freq > maxFreq) {
            maxFreqWord = word;
            maxFreq = freq;
        }
    }
    return maxFreqWord;
}
