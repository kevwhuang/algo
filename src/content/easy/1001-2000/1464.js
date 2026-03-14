// 1464 - Maximum Product of Two Elements in an Array

function maxProduct(nums) {
    let max1 = 1, max2 = 1, i = -1;
    while (++i < nums.length) {
        if (nums[i] > max1) max2 = max1, max1 = nums[i];
        else if (nums[i] > max2) max2 = nums[i];
    }
    return (max1 - 1) * (max2 - 1);
}
