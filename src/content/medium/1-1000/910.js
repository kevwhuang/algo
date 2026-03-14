// 910 - Smallest Range II

function smallestRangeII(nums, k) {
    nums.sort((a, b) => a - b);
    let score = nums.at(-1) - nums[0];
    const head = nums[0] + k, tail = nums.at(-1) - k;
    for (let i = 0; i < nums.length - 1; i++) {
        const max = Math.max(nums[i] + k, tail);
        const min = Math.min(nums[i + 1] - k, head);
        score = Math.min(max - min, score);
    }
    return score;
}
