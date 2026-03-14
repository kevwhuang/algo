// 1319 - Number of Operations to Make Network Connected

function makeConnected(n, connections) {
    if (n - 1 > connections.length) return -1;
    let components = n;
    const parents = new Array(n);
    for (let i = 0; i < connections.length; i++) {
        let [v1, v2] = connections[i];
        while (parents[v1] !== undefined) v1 = parents[v1];
        while (parents[v2] !== undefined) v2 = parents[v2];
        if (v1 === v2) continue;
        parents[v1] = v2;
        components--;
    }
    return components - 1;
}
