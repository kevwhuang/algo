// 45 - Jump Game II

function jump(nums) {
    let res = 0, max = 0, i = 0, j = 0;
    const n = nums.length - 1;
    while (i < n) {
        max = Math.max(i + nums[i], max);
        if (i++ === j) res++, j = max;
    }
    return res;
}
