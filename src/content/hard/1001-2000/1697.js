// 1697 - Checking Existence of Edge Length Limited Paths

function distanceLimitedPathsExist(n, edgeList, queries) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: n }, (_, i) => i);
    const M = edgeList.sort((a, b) => a[2] - b[2]);
    const arr = Array.from({ length: queries.length }, (_, i) => i);
    arr.sort((a, b) => queries[a][2] - queries[b][2]);
    for (let i = 0, j = 0; i < arr.length; i++) {
        const cur = queries[arr[i]];
        while (j < M.length && M[j][2] < cur[2]) {
            uf[find(M[j][0])] = find(M[j++][1]);
        }
        queries[arr[i]] = find(cur[0]) === find(cur[1]);
    }
    return queries;
}
