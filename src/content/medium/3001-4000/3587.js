// 3587 - Minimum Adjacent Swaps to Alternate Parity

function minSwaps(nums) {
    let acc1 = 0, acc2 = 0, acc3 = 0, i = -1;
    const n = nums.length;
    while (++i < n) acc1 += nums[i] % 2;
    if (Math.abs(2 * acc1 - n) > 1) return -1;
    for (let i = 0, j = 0, k = 0; i < n; i++) {
        if (nums[i] % 2) acc2 += Math.abs(i - j), j += 2;
        else acc3 += Math.abs(i - k), k += 2;
    }
    return n % 2 ? 2 * acc1 > n ? acc2 : acc3 : Math.min(acc2, acc3);
}
