// 737 - Sentence Similarity II

function areSentencesSimilarTwo(sentence1, sentence2, similarPairs) {
    function union(v1, v2) {
        const p1 = find(v1);
        const p2 = find(v2);
        if (p1 < p2) uf[p2] = p1;
        else uf[p1] = p2;
    }
    function find(v) {
        while (v !== uf[v]) {
            uf[v] = uf[uf[v]];
            v = uf[v];
        }
        return v;
    }
    if (sentence1.length !== sentence2.length) return false;
    const uf = {};
    for (let i = 0; i < similarPairs.length; i++) {
        const word1 = similarPairs[i][0], word2 = similarPairs[i][1];
        if (!(word1 in uf)) uf[word1] = word1;
        if (!(word2 in uf)) uf[word2] = word2;
        union(word1, word2);
    }
    for (let i = 0; i < sentence1.length; i++) {
        const word1 = sentence1[i], word2 = sentence2[i];
        if (word1 === word2) continue;
        if (!(word1 in uf) || !(word2 in uf)) return false;
        if (find(word1) !== find(word2)) return false;
    }
    return true;
}
