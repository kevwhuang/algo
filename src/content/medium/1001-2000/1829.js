// 1829 - Maximum XOR for Each Query

function getMaximumXor(nums, maximumBit) {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        nums[i] ^= nums[i - 1];
    }
    const res = new Uint32Array(n), pow = 2 ** maximumBit - 1;
    for (let i = 0; i < n; i++) {
        res[i] = nums[n - i - 1] ^ pow;
    }
    return res;
}
