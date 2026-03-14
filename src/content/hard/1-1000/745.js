// 745 - Prefix and Suffix Search

class WordFilter {
    constructor(words) {
        this.map = new Map();
        for (let i = 0; i < words.length; i++) {
            const s = words[i], n = s.length;
            for (let j = 1; j <= n; j++) {
                for (let k = 0; k < n; k++) {
                    this.map.set(`${s.slice(0, j)}*${s.slice(k)}`, i);
                }
            }
        }
    }
    f(pref, suff) {
        return this.map.get(`${pref}*${suff}`) ?? -1;
    }
}
