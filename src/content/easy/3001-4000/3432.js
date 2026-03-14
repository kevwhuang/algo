// 3432 - Count Partitions With Even Sum Difference

function countPartitions(nums) {
    let res = 0, left = 0, right = nums.reduce((s, e) => s + e);
    const n = nums.length - 1;
    for (let i = 0; i < n; i++) {
        left += nums[i], right -= nums[i];
        if ((left - right) % 2 === 0) res++;
    }
    return res;
}
