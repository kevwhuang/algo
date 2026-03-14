// 1948 - Delete Duplicate Folders in System

function deleteDuplicateFolder(paths) {
    function dfs(node) {
        const A = Object.keys(node).sort();
        if (A.length < 1) return '';
        let s = '';
        for (let i = 0; i < A.length; i++) {
            s += `(${A[i]}${dfs(node[A[i]])})`;
        }
        B.set(s, (B.get(s) ?? 0) + 1);
        return node[key] = s;
    }
    function backtrack(node) {
        for (const s in node) {
            if (B.get(node[s][key]) > 1) continue;
            cur.push(s);
            res.push([...cur]);
            backtrack(node[s]);
            cur.pop();
        }
    }
    const trie = {};
    for (let i = 0; i < paths.length; i++) {
        const A = paths[i];
        for (let node = trie, j = 0; j < A.length; j++) {
            node[A[j]] ??= {};
            node = node[A[j]];
        }
    }
    const B = new Map(), key = Symbol(0);
    dfs(trie);
    const res = [], cur = [];
    backtrack(trie);
    return res;
}
