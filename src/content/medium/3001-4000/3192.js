// 3192 - Minimum Operations to Make Binary Array Elements Equal to One II

function minOperations(nums) {
    let ops = 0, i = 0;
    while (i < nums.length) {
        if ((nums[i++] + ops) % 2 === 0) ops++;
    }
    return ops;
}
