// 3310 - Remove Methods From Project

function remainingMethods(n, k, invocations) {
    function dfs(node) {
        if (set.has(node)) return;
        set.add(node);
        adj[node].forEach(dfs);
    }
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < invocations.length; i++) {
        adj[invocations[i][0]].push(invocations[i][1]);
    }
    const set = new Set();
    dfs(k);
    for (let i = 0; i < invocations.length; i++) {
        if (set.has(invocations[i][0])) continue;
        if (!set.has(invocations[i][1])) continue;
        return Array.from({ length: n }, (_, i) => i);
    }
    const res = [];
    for (let node = 0; node < n; node++) {
        if (!set.has(node)) res.push(node);
    }
    return res;
}
