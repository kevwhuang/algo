// 734 - Sentence Similarity

function areSentencesSimilar(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) return false;
    const map = new Map();
    for (let i = 0; i < similarPairs.length; i++) {
        const pair = similarPairs[i];
        if (map.has(pair[0])) map.get(pair[0]).push(pair[1]);
        else map.set(pair[0], [pair[1]]);
    }
    for (let i = 0; i < sentence1.length; i++) {
        const word1 = sentence1[i], word2 = sentence2[i];
        if (word1 === word2) continue;
        if (map.has(word1)) {
            if (!map.get(word1).includes(word2)) {
                if (map.has(word2) && map.get(word2).includes(word1)) continue;
                return false;
            }
        } else if (map.has(word2)) {
            if (!map.get(word2).includes(word1)) return false;
        } else {
            return false;
        }
    }
    return true;
}
