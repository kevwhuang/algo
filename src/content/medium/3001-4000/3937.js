// 3937. Minimum Operations to Make Array Modulo Alternating I

function minOperations(nums, k) {
    const C1 = new Uint16Array(k), C2 = new Uint16Array(k);
    for (let i = 0; i < nums.length; i++) {
        const mod = nums[i] % k;
        for (let a = 0; a < k; a++) {
            const abs = Math.abs(a - mod);
            (i % 2 ? C1 : C2)[a] += Math.min(abs, k - abs);
        }
    }
    let res = Infinity;
    for (let a = 0; a < k; a++) {
        for (let b = 0; b < k; b++) {
            if (a !== b) res = Math.min(C1[a] + C2[b], res);
        }
    }
    return res;
}
