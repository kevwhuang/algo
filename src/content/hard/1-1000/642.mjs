// 642 - Design Search Autocomplete System

class AutocompleteSystem {
    constructor(sentences, times) {
        this.fn = (a, b) => this.B.get(b) - this.B.get(a) || a.localeCompare(b);
        this.B = new Map();
        this.trie = {};
        this.cur = '';
        this.node;
        for (let i = 0; i < sentences.length; i++) {
            this.B.set(sentences[i], times[i]);
            this.#add(sentences[i]);
        }
    }
    input(c) {
        if (c === '#') {
            this.B.set(this.cur, (this.B.get(this.cur) ?? 0) + 1);
            this.#add(this.cur);
            this.cur = '', this.node = null;
            return [];
        }
        this.cur += c, this.node ??= this.trie;
        if (!this.node || !this.node[c]) this.node = false;
        if (!this.node) return [];
        const res = this.node[c].arr;
        this.node = this.node[c];
        return res.sort(this.fn).slice(0, 3);
    }
    #add(s) {
        for (let node = this.trie, i = 0; i < s.length; i++) {
            node[s[i]] ??= { arr: [] };
            if (!node[s[i]].arr.includes(s)) node[s[i]].arr.push(s);
            node = node[s[i]];
        }
    }
}
