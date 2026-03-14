// 3093 - Longest Common Suffix Queries

function stringIndices(wordsContainer, wordsQuery) {
    const trie = { min: 0 };
    for (let i = 0; i < wordsContainer.length; i++) {
        const s = wordsContainer[i], n = s.length;
        if (wordsContainer[trie.min].length > n) trie.min = i;
        for (let node = trie, j = n - 1; ~j; j--) {
            const t = s[j];
            node[t] ??= { min: i };
            if (wordsContainer[node[t].min].length > n) node[t].min = i;
            node = node[t];
        }
    }
    const res = wordsQuery;
    for (let i = 0; i < res.length; i++) {
        const s = res[i];
        let node = trie;
        for (let j = s.length - 1; ~j && node[s[j]]; j--) {
            node = node[s[j]];
        }
        res[i] = node.min;
    }
    return res;
}
