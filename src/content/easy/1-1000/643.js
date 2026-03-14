// 643 - Maximum Average Subarray I

function findMaxAverage(nums, k) {
    let window = 0;
    for (let i = 0; i < k; i++) {
        window += nums[i];
    }
    let max = window;
    for (let i = k; i < nums.length; i++) {
        window += nums[i] - nums[i - k];
        if (window > max) max = window;
    }
    return max / k;
}
