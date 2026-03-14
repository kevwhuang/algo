// 1032 - Stream of Characters

class StreamChecker {
    constructor(words) {
        this.trie = this.#init(words);
        this.Q = [];
    }
    query(letter) {
        let res = false;
        const N = [], next = this.trie[letter];
        if (next && next.flag) res = true;
        if (next) N.push(next);
        for (let i = 0; i < this.Q.length; i++) {
            const next = this.Q[i][letter];
            if (next && next.flag) res = true;
            if (next) N.push(next);
        }
        this.Q = N;
        return res;
    }
    #init(arr) {
        const trie = {};
        for (let i = 0; i < arr.length; i++) {
            let node = trie;
            const s = arr[i];
            for (let j = 0; j < s.length; j++) {
                node[s[j]] ??= {};
                node = node[s[j]];
            }
            node.flag = true;
        }
        return trie;
    }
}
