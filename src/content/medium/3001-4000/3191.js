// 3191 - Minimum Operations to Make Binary Array Elements Equal to One I

function minOperations(nums) {
    let ops = 0, i = 0;
    const bound = nums.length - 2;
    while (i < bound) {
        if (nums[i++]) continue;
        nums[i] ^= 1;
        nums[i + 1] ^= 1;
        ops++;
    }
    return nums.at(-2) && nums.at(-1) ? ops : -1;
}
