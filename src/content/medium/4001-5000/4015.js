// 4015. Weighted Sum of a Tree

function weightedSum(parent, nums) {
    const recurse = v => A[v] ||= recurse(parent[v]) + 1;
    if (!this.A) A = new Uint32Array(1e5), A[0] = 1;
    A.fill(0, 1, parent.length + 1);
    const max = nums.reduce((s, _, v) => Math.max(recurse(v), s), 1) + 1;
    return nums.reduce((s, e, v) => s + e * (max - A[v]), 0);
}
