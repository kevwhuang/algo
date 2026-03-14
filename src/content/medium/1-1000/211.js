// 211 - Design Add and Search Words Data Structure

class WordDictionary {
    constructor() {
        this.trie = {};
    }
    addWord(word) {
        let node = this.trie, i = -1;
        while (++i < word.length) {
            node[word[i]] ??= {};
            node = node[word[i]];
        }
        node.end = true;
    }
    search(word) {
        function dfs(i, node) {
            if (!node) return false;
            if (i === word.length) return node.end ?? false;
            if (word[i] !== '.') return dfs(i + 1, node[word[i]]);
            for (const key in node) {
                if (dfs(i + 1, node[key])) return true;
            }
            return false;
        }
        return dfs(0, this.trie);
    }
}
