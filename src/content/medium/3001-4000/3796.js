// 3796 - Find Maximum Value in a Constrained Sequence

function findMaxVal(n, restrictions, diff) {
    if (!this.A) A = new Uint32Array(100000);
    A.fill(-1, 0, n).fill(0, 0, 1);
    restrictions.forEach(e => A[e[0]] = e[1]);
    for (let i = 1; i < n; i++) {
        A[i] = Math.min(A[i - 1] + diff[i - 1], A[i]);
    }
    let res = A[n - 1];
    for (let i = n - 2; ~i; i--) {
        A[i] = Math.min(A[i + 1] + diff[i], A[i]);
        res = Math.max(A[i], res);
    }
    return res;
}
