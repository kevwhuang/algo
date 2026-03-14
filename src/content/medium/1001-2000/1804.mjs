// 1804 - Implement Trie II (Prefix Tree)

class Trie {
    constructor() {
        this.trie = new TrieNode();
    }
    countWordsEqualTo(word) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!node.children.has(word[i])) return 0;
            node = node.children.get(word[i]);
        }
        return node.count || 0;
    }
    countWordsStartingWith(prefix) {
        let node = this.trie;
        for (let i = 0; i < prefix.length; i++) {
            if (!node.children.has(prefix[i])) return 0;
            node = node.children.get(prefix[i]);
        }
        return node.subcount || 0;
    }
    erase(word) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            node.subcount--;
            node = node.children.get(word[i]);
        }
        node.count--;
        node.subcount--;
    }
    insert(word) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node.subcount++;
            node = node.children.get(char);
        }
        node.count++;
        node.subcount++;
    }
}

class TrieNode {
    constructor() {
        this.children = new Map();
        this.count = 0;
        this.subcount = 0;
    }
}
