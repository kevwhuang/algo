// 676 - Implement Magic Dictionary

class MagicDictionary {
    constructor() {
        this.dict;
    }
    buildDict(dictionary) {
        this.dict = new Set(dictionary);
    }
    search(searchWord) {
        for (const compareWord of this.dict) {
            if (searchWord.length !== compareWord.length) continue;
            let diff = 0;
            for (let i = 0; i < searchWord.length; i++) {
                if (searchWord[i] !== compareWord[i]) diff++;
                if (diff > 1) break;
            }
            if (diff === 1) return true;
        }
        return false;
    }
}
