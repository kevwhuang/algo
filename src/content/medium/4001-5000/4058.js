// 4058. Maximum Pulse Value After One Subarray Rotation

function maxValue(nums) {
    const max = Math.max;
    let pre = 0, max1 = 0, max2 = 0, max3 = -Infinity, max4 = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        pre += i % 2 ? -nums[i] : nums[i];
        if (i % 2) max1 = max(max2 - pre, max1), max2 = max(pre, max2);
        else max3 = max(max4 - pre, max3), max4 = max(pre, max4);
    }
    return max(pre, pre + 2 * max(max1, max3));
}
