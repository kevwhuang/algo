// 3331 - Find Subtree Sizes After Changes

function findSubtreeSizes(parent, s) {
    function dfs(node) {
        const code = s.charCodeAt(node) - 97;
        const temp = prev[code];
        prev[code] = node;
        for (let i = 0; i < adj[node].length; i++) {
            const size = dfs(adj[node][i]);
            res[node] += size;
        }
        prev[code] = temp;
        if (~temp) res[temp] += res[node];
        return ~temp ? 0 : res[node];
    }
    const adj = Array.from({ length: parent.length }, () => []);
    parent.forEach((e, i) => ~e && adj[e].push(i));
    const res = parent.fill(1);
    const prev = new Int32Array(26).fill(-1);
    dfs(0);
    return res;
}
