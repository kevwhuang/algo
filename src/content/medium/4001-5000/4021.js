// 4021. Minimum Operations to Make a Rotated Palindrome I

function minOperations(s) {
    if (!this.A) A = new Uint8Array(4000);
    const n = s.length;
    for (let i = 0; i < n; i++) {
        A[i] = A[i + n] = s.charCodeAt(i) - 97;
    }
    let res = Infinity;
    for (let i = 0; i < n; i++) {
        let sum = i;
        for (let l = i, r = i + n - 1; sum < res && l < r; l++, r--) {
            const abs = Math.abs(A[l] - A[r]);
            sum += Math.min(abs, 26 - abs);
        }
        res = Math.min(sum, res);
    }
    return res;
}
