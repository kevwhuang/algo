// 208 - Implement Trie (Prefix Tree)

class Trie {
    constructor() {
        this.trie = {};
    }
    insert(word) {
        let node = this.trie, i = -1;
        while (++i < word.length) {
            node[word[i]] ??= {};
            node = node[word[i]];
        }
        node.end = true;
    }
    search(word, base) {
        let node = this.trie, i = -1;
        while (++i < word.length) {
            if (!node[word[i]]) return false;
            node = node[word[i]];
        }
        return node.end ?? base ?? false;
    }
    startsWith(prefix) {
        return this.search(prefix, true);
    }
}
