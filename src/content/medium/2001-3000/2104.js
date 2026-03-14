// 2104 - Sum of Subarray Ranges

function subArrayRanges(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let max = nums[i], min = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > max) max = nums[j];
            if (nums[j] < min) min = nums[j];
            sum += max - min;
        }
    }
    return sum;
}
