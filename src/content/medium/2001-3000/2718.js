// 2718 - Sum of Matrix After Queries

function matrixSumQueries(n, queries) {
    let sum = 0;
    const seen = [new Set(), new Set()];
    for (let i = queries.length - 1; ~i; i--) {
        const type = queries[i][0], idx = queries[i][1];
        if (seen[type].has(idx)) continue;
        seen[type].add(idx);
        sum += queries[i][2] * (n - seen[Math.abs(type - 1)].size);
    }
    return sum;
}
