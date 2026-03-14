class HashTable {
    constructor() {
        this.hash = new Array(10000000);
    }
    get(key) {
        const idx = this.#hash(key);
        if (!this.hash[idx]) return null;
        for (let i = 0; i < this.hash[idx].length; i++) {
            if (this.hash[idx][i][0] === key) return this.hash[idx][i][1];
        }
        return null;
    }
    keys(base = 0) {
        const res = [];
        for (let i = 0; i < 10000000; i++) {
            if (!this.hash[i]) continue;
            for (let j = 0; j < this.hash[i].length; j++) {
                res.push(this.hash[i][j][base]);
            }
        }
        return res;
    }
    set(key, val) {
        const idx = this.#hash(key);
        this.hash[idx] ??= [];
        for (let i = 0; i < this.hash[idx].length; i++) {
            if (this.hash[idx][i][0] !== key) continue;
            this.hash[idx][i][1] = val;
            return true;
        }
        this.hash[idx].push([key, val]);
        return true;
    }
    values() {
        return this.keys(1);
    }
    #hash(key) {
        key = String(key);
        let res = 0;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            res += key.charCodeAt(i);
            res *= 1000000007;
            res %= 10000000;
        }
        return res;
    }
}

module.exports = HashTable;
