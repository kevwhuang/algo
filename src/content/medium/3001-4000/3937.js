// 3937. Minimum Operations to Make Array Modulo Alternating I

function minOperations(nums, k) {
    let min = Infinity;
    for (let a = 0; a < k; a++) {
        for (let b = 0; b < k; b++) {
            if (a === b) continue;
            let acc = 0;
            for (let i = 0; i < nums.length; i++) {
                const mod = nums[i] % k;
                const tgt = i % 2 ? a : b;
                const diff = Math.abs(mod - tgt);
                acc += Math.min(diff, k - diff);
            }
            min = Math.min(acc, min);
        }
    }
    return min;
}
