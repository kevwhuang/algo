// 1438 - Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

function longestSubarray(nums, limit) {
    let max = 0;
    const q1 = [], q2 = [];
    for (let l = 0, r = 0; r < nums.length; r++) {
        while (q1.length && nums[q1.at(-1)] >= nums[r]) q1.pop();
        while (q2.length && nums[q2.at(-1)] <= nums[r]) q2.pop();
        if (q1[0] <= r - max - 1) q1.shift();
        if (q2[0] <= r - max - 1) q2.shift();
        q1.push(r);
        q2.push(r);
        if (nums[q2[0]] - nums[q1[0]] <= limit) max = r - l + 1;
        else l = Math.min(q1[0], q2[0]) + 1;
    }
    return max;
}
