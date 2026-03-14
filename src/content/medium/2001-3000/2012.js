// 2012 - Sum of Beauty in the Array

function sumOfBeauties(nums) {
    const mins = new Array(nums.length);
    for (let i = nums.length - 2, min = 1e6; i > 0; i--) {
        min = Math.min(nums[i + 1], min);
        mins[i] = min;
    }
    let beauty = 0;
    for (let i = 1, max = 1; i < nums.length - 1; i++) {
        max = Math.max(nums[i - 1], max);
        const num = nums[i];
        if (max < num && num < mins[i]) beauty += 2;
        else if (nums[i - 1] < num && num < nums[i + 1]) beauty++;
    }
    return beauty;
}
