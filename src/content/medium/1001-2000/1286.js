// 1286 - Iterator for Combination

class CombinationIterator {
    constructor(characters, combinationLength) {
        this.characters = characters;
        this.combinationLength = combinationLength;
        this.i = 0;
        this.permutations = [];
        this.#backtrack(0, '');
    }
    hasNext() {
        return this.i < this.permutations.length;
    }
    next() {
        return this.permutations[this.i++];
    }
    #backtrack(i, cur) {
        if (cur.length === this.combinationLength) {
            return this.permutations.push(cur);
        }
        if (i === this.characters.length) return;
        this.#backtrack(i + 1, cur + this.characters[i]);
        this.#backtrack(i + 1, cur);
    }
}
