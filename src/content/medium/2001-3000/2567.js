// 2567 - Minimum Score by Changing Two Elements

function minimizeSum(nums) {
    let min1 = 1e9, min2 = 1e9, min3 = 1e9;
    let max1 = 1, max2 = 1, max3 = 1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num < min1) [min1, min2, min3] = [num, min1, min2];
        else if (num < min2) [min2, min3] = [num, min2];
        else if (num < min3) min3 = num;
        if (num > max1) [max3, max2, max1] = [max2, max1, num];
        else if (num > max2) [max3, max2] = [max2, num];
        else if (num > max3) max3 = num;
    }
    return Math.min(max1 - min3, max2 - min2, max3 - min1);
}
