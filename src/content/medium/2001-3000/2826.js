// 2826 - Sorting Three Groups

function minimumOperations(nums) {
    let a = 0, b = 0, c = 0, i = -1;
    while (++i < nums.length) {
        a += nums[i] !== 1;
        b = Math.min(a, b + (nums[i] !== 2));
        c = Math.min(b, c + (nums[i] !== 3));
    }
    return c;
}
