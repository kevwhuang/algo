// 3353 - Minimum Total Operations

function minOperations(nums) {
    let res = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) res++;
    }
    return res;
}
