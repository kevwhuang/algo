// 1971 - Find If Path Exists in Graph

function validPath(n, edges, source, destination) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: n }, (_, i) => i);
    edges.forEach(e => uf[find(e[0])] = find(e[1]));
    return find(source) === find(destination);
}
