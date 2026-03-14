// 2519 - Count the Number of K-Big Indices

function kBigIndices(nums, k) {
    if (!this.tree) tree = new Uint32Array(100001);
    const A = nums, n = A.length;
    tree.fill(0, 0, n + 1);
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = A[i]; j; j -= j & -j) {
            sum += tree[j];
        }
        for (let j = A[i] + 1; j <= n; j += j & -j) {
            tree[j]++;
        }
        if (sum >= k) A[i] *= -1;
    }
    tree.fill(0, 0, n + 1);
    let res = 0;
    for (let i = n - 1; ~i; i--) {
        let sum = 0;
        for (let j = -A[i]; j > 0; j -= j & -j) {
            sum += tree[j];
        }
        if (sum >= k) res++;
        for (let j = Math.abs(A[i]) + 1; j <= n; j += j & -j) {
            tree[j]++;
        }
    }
    return res;
}
