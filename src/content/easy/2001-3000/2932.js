// 2932 - Maximum Strong Pair XOR I

function maximumStrongPairXor(nums) {
    let max = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const a = nums[i];
        for (let j = i + 1; j < n; j++) {
            const b = nums[j];
            if (Math.abs(a - b) > Math.min(a, b)) continue;
            max = Math.max(a ^ b, max);
        }
    }
    return max;
}
