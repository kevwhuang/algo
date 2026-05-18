// 3045. Count Prefix and Suffix Pairs II

function countPrefixSuffixPairs(words) {
    let res = 0;
    const trie = {};
    for (let i = 0; i < words.length; i++) {
        const s = words[i], n = s.length;
        let node = trie;
        for (let j = 0; j < n; j++) {
            const t = s[j] + s[n - j - 1];
            node[t] ??= { acc: 0 }, node = node[t], res += node.acc;
        }
        node.acc++;
    }
    return res;
}
