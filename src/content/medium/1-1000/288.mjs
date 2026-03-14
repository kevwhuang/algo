// 288 - Unique Word Abbreviation

class ValidWordAbbr {
    constructor(dictionary) {
        this.map = new Map();
        for (let i = 0; i < dictionary.length; i++) {
            const word = dictionary[i];
            if (word.length <= 2) continue;
            const abbr = this.#getAbbreviation(word);
            if (this.map.has(abbr)) this.map.get(abbr).add(word);
            else this.map.set(abbr, new Set([word]));
        }
    }
    isUnique(word) {
        if (word.length <= 2) return true;
        const abbr = this.#getAbbreviation(word);
        if (!this.map.has(abbr)) return true;
        if (this.map.get(abbr).size > 1) return false;
        return this.map.get(abbr).keys().next().value === word;
    }
    #getAbbreviation(word) {
        return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
    }
}
