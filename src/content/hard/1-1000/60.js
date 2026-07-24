// 60. Permutation Sequence

function getPermutation(n, k) {
    let res = '';
    const A = Array.from({ length: n }, (_, i) => i + 1);
    const dict = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    while (res.length < n) {
        const a = dict[Math.max(0, n - res.length - 2)];
        const b = (k - 1) / a | 0;
        res += A[b], k -= a * b;
        A.splice(b, 1);
    }
    return res;
}
