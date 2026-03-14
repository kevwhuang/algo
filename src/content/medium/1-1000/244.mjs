// 244 - Shortest Word Distance II

class WordDistance {
    constructor(wordsDict) {
        this.words = new Map();
        for (let i = 0; i < wordsDict.length; i++) {
            if (!this.words.has(wordsDict[i])) {
                this.words.set(wordsDict[i], []);
            }
            this.words.get(wordsDict[i]).push(i);
        }
    }
    shortest(word1, word2) {
        let min = Infinity, i = 0, j = 0;
        const indices1 = this.words.get(word1);
        const indices2 = this.words.get(word2);
        while (i < indices1.length && j < indices2.length) {
            if (indices1[i] < indices2[j]) {
                min = Math.min(indices2[j] - indices1[i++], min);
            } else {
                min = Math.min(indices1[i] - indices2[j++], min);
            }
        }
        return min;
    }
}
