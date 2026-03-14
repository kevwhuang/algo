// 891 - Sum of Subsequence Widths

function sumSubseqWidths(nums) {
    let res = 0, pow = 1;
    const A = new Uint32Array(nums).sort();
    const n = A.length - 1;
    for (let i = 0; i <= n; i++) {
        res = (res + pow * (A[i] - A[n - i])) % 1000000007;
        pow = 2 * pow % 1000000007;
    }
    return res;
}
