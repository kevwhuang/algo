// 3026 - Maximum Good Subarray Sum

function maximumSubarraySum(nums, k) {
    let max = -Infinity;
    const prefixSum = new Array(nums.length + 1);
    prefixSum[0] = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const sum = prefixSum[i + 1] = prefixSum[i] + nums[i];
        if (map.has(num + k)) {
            max = Math.max(sum - prefixSum[map.get(num + k)], max);
        }
        if (map.has(num - k)) {
            max = Math.max(sum - prefixSum[map.get(num - k)], max);
        }
        if (!map.has(num) || sum - prefixSum[map.get(num) + 1] < 0) {
            map.set(num, i);
        }
    }
    return max === -Infinity ? 0 : max;
}
