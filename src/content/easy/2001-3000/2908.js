// 2908 - Minimum Sum of Mountain Triplets I

function minimumSum(nums) {
    let min = Infinity;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] >= nums[j]) continue;
            for (let k = j + 1; k < len; k++) {
                if (nums[j] <= nums[k]) continue;
                min = Math.min(nums[i] + nums[j] + nums[k], min);
            }
        }
    }
    return min === Infinity ? -1 : min;
}
