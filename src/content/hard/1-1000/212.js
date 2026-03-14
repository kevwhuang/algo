// 212 - Word Search II

function findWords(board, words) {
    function backtrack(r, c, node) {
        if (!node) return;
        if (node.cur) {
            const s = node.cur;
            for (let node = trie, i = 0; i < s.length; i++) {
                if (--node[s[i]].acc && (node = node[s[i]])) continue;
                node[s[i]] = null;
                break;
            }
            res.push(s);
            node.cur = null;
        }
        const cur = M[r][c];
        M[r][c] = null;
        if (r) backtrack(r - 1, c, node[M[r - 1][c]]);
        if (r + 1 < m) backtrack(r + 1, c, node[M[r + 1][c]]);
        if (c) backtrack(r, c - 1, node[M[r][c - 1]]);
        if (c + 1 < n) backtrack(r, c + 1, node[M[r][c + 1]]);
        M[r][c] = cur;
    }
    const trie = {};
    for (let i = 0; i < words.length; i++) {
        let node = trie;
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            node[s[j]] ??= { acc: 0 };
            node[s[j]].acc++;
            node = node[s[j]];
        }
        node.cur = s;
    }
    const res = [], M = board, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            backtrack(r, c, trie[M[r][c]]);
        }
    }
    return res;
}
