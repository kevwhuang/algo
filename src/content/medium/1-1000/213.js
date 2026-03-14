// 213 - House Robber II

function rob(nums) {
    if (nums.length <= 3) return Math.max(...nums);
    let max, a = 0, b = 0, c = 0, d = 0, i = 0;
    while (++i < nums.length) {
        max = Math.max(a + nums[i - 1], b);
        a = b, b = max;
        max = Math.max(c + nums[i], d);
        c = d, d = max;
    }
    return Math.max(b, d);
}
