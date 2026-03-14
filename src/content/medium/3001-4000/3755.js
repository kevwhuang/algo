// 3755 - Find Maximum Balanced XOR Subarray Length

function maxBalancedSubarray(nums) {
    let res = 0, xor = 0, acc = 0, i = -1;
    const map = new Map([[0, -1]]);
    while (++i < nums.length) {
        xor ^= nums[i];
        if (nums[i] & 1) acc++;
        else acc--;
        const key = 1000000 * xor + acc;
        if (!map.has(key)) map.set(key, i);
        else res = Math.max(i - map.get(key), res);
    }
    return res;
}
