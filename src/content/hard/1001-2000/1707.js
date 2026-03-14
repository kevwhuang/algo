// 1707 - Maximum XOR With an Element From Array

function maximizeXor(nums, queries) {
    const A = new Uint32Array(nums).sort();
    for (let i = 0; i < queries.length; i++) {
        const a = queries[i][0], b = queries[i][1];
        queries[i] = -1;
        if (b < A[0]) continue;
        let l = 0, r = A.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (A[m] <= b) l = m + 1;
            else r = m - 1;
        }
        l = 0;
        for (let j = A[r] ? Math.log2(A[r]) | 0 : 0; ~j; j--) {
            if ((A[l] >> j & 1) === (A[r] >> j & 1)) continue;
            const tgt = A[r] >> j << j;
            let ll = l, rr = r;
            while (ll <= rr) {
                const m = ll + rr >> 1;
                if (A[m] < tgt) ll = m + 1;
                else rr = m - 1;
            }
            if (~a >> j & 1) l = ll;
            else r = ll - 1;
        }
        queries[i] = a ^ A[l];
    }
    return queries;
}
