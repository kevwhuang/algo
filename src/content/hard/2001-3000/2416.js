// 2416 - Sum of Prefix Scores of Strings

function sumPrefixScores(words) {
    const trie = {};
    for (let i = 0; i < words.length; i++) {
        let node = trie;
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            node[s[j]] ??= { acc: 0 };
            node[s[j]].acc++;
            node = node[s[j]];
        }
    }
    const res = new Uint32Array(words.length);
    for (let i = 0; i < words.length; i++) {
        let node = trie;
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            res[i] += node[s[j]].acc;
            node = node[s[j]];
        }
    }
    return res;
}
