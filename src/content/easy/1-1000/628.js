// 628 - Maximum Product of Three Numbers

function maximumProduct(nums) {
    let max1 = -1001, max2 = -1001, max3 = -1001, min1 = 1001, min2 = 1001;
    for (let i = 0, cur; i < nums.length; i++) {
        cur = nums[i];
        if (cur > max1) {
            max3 = max2;
            max2 = max1;
            max1 = cur;
        } else if (cur > max2) {
            max3 = max2;
            max2 = cur;
        } else if (cur > max3) {
            max3 = cur;
        }
        if (cur < min1) {
            min2 = min1;
            min1 = cur;
        } else if (cur < min2) {
            min2 = cur;
        }
    }
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}
