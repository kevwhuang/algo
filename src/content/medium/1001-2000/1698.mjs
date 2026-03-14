// 1698 - Number of Distinct Substrings in a String

function countDistinct(s) {
    let substrings = 0;
    const trie = {}, len = s.length;
    for (let i = 0; i < len; i++) {
        let node = trie;
        for (let j = i; j < len; j++) {
            const char = s.charAt(j);
            if (!(char in node)) {
                node[char] = {};
                substrings++;
            }
            node = node[char];
        }
    }
    return substrings;
}
