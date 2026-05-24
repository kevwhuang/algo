// 3935. Power Update After Kth Largest Insertion I

function powerUpdate(nums, p, queries) {
    if (!this.tree) tree = new Uint16Array(1 << 17);
    const set = new Set(nums);
    queries.forEach(e => set.add(e[0]));
    const ind = new Uint32Array(set.keys()).sort();
    const n = 1 << Math.ceil(Math.log2(ind.length));
    tree.fill(0, 0, 2 * n);
    const map = new Map();
    ind.forEach((e, i) => map.set(e, i));
    for (let i = 0; i < nums.length; i++) {
        let j = map.get(nums[i]) + n;
        tree[j]++;
        while (j > 1) j >>= 1, tree[j] = tree[2 * j] + tree[2 * j + 1];
    }
    const mod = BigInt(1e9 + 7);
    for (let i = 0; i < queries.length; i++) {
        let j = map.get(queries[i][0]) + n;
        tree[j]++;
        while (j > 1) j >>= 1, tree[j] = tree[2 * j] + tree[2 * j + 1];
        j = 1;
        let k = tree[1] - queries[i][1] + 1;
        while (j < n) {
            if (tree[2 * j] >= k) j *= 2;
            else k -= tree[2 * j], j = 2 * j + 1;
        }
        let pow = 1n, cur = BigInt(p), exp = ind[j - n];
        while (exp) {
            if (exp & 1) pow = pow * cur % mod;
            cur = cur * cur % mod, exp >>= 1;
        }
        queries[i] = p = Number(pow);
    }
    return queries;
}
