// 996 - Number of Squareful Arrays

function numSquarefulPerms(nums) {
    function backtrack(i, mask, b) {
        if (i === A.length) return 1;
        let sum = 0;
        for (let prev, j = 0; j < A.length; j++) {
            const a = A[j];
            if (mask & 1 << j || a === prev) continue;
            if (a + b > ((a + b) ** 0.5 | 0) ** 2) continue;
            sum += backtrack(i + 1, mask | 1 << j, a);
            prev = a;
        }
        return sum;
    }
    const A = new Uint32Array(nums).sort();
    return backtrack(0, 0);
}
