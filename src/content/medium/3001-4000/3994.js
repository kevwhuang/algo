// 3994. Minimum Adjacent Swaps to Partition Array

function minAdjacentSwaps(nums, a, b) {
    let res = 0;
    const mod = 1e9 + 7;
    for (let acc1 = 0, acc2 = 0, i = 0; i < nums.length; i++) {
        if (nums[i] < a) res = (res + acc1 + acc2) % mod;
        else if (nums[i] > b) acc1++;
        else res = (res + acc1) % mod, acc2++;
    }
    return res;
}
