// 3644 - Maximum K to Sort a Permutation

function sortPermutation(nums) {
    let res, i = -1;
    while (++i < nums.length) {
        if (nums[i] !== i) res = (res ?? nums[i]) & nums[i];
    }
    return res ?? 0;
}
