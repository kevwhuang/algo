// 2863 - Maximum Length of Semi-Decreasing Subarrays

function maxSubarrayLength(nums) {
    const arr = [0], n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[arr[arr.length - 1]]) arr.push(i);
    }
    let max = 0;
    for (let i = n - 1, j = arr.length - 1; ~i && ~j; i--) {
        while (~j && nums[i] < nums[arr[j]]) {
            max = Math.max(i - arr[j--] + 1, max);
        }
    }
    return max;
}
