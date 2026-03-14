// 2872 - Maximum Number of K-Divisible Components

function maxKDivisibleComponents(n, edges, values, k) {
    function dfs(node, prev) {
        let sum = values[node];
        const arr = adj[node];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== prev) sum += dfs(arr[i], node);
        }
        if (sum % k === 0) res++;
        return sum;
    }
    const adj = Array.from({ length: n }, () => []);
    edges.forEach(e => adj[e[0]].push(e[1]) && adj[e[1]].push(e[0]));
    let res = 0;
    dfs(0);
    return res;
}
