// 3532 - Path Existence Queries in a Graph I

function pathExistenceQueries(n, nums, maxDiff, queries) {
    const uf = new Uint32Array(n);
    let prev, u, v = 0;
    while (v < n) {
        prev = nums[v], u = v;
        while (v < n && nums[v] - prev <= maxDiff) uf[v] = u, prev = nums[v++];
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = uf[queries[i][0]] === uf[queries[i][1]];
    }
    return queries;
}
