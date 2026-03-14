// 3840 - House Robber V

function rob(nums, colors) {
    let a = 0, b = nums[0], i = 0;
    while (++i < nums.length) {
        let max = Math.max(a + nums[i], b, nums[i]);
        if (colors[i - 1] !== colors[i]) max = Math.max(b + nums[i], max);
        a = b, b = max;
    }
    return b;
}
