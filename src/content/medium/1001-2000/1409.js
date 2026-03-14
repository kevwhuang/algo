// 1409 - Queries on a Permutation With Key

function processQueries(queries, m) {
    const nums = new Array(m);
    for (let n = 1; n <= m; n++) {
        nums[n - 1] = n;
    }
    const res = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        const index = nums.indexOf(queries[i]);
        res[i] = index;
        nums.splice(index, 1);
        nums.unshift(queries[i]);
    }
    return res;
}
