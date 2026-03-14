// 3282 - Reach End of Array With Max Score

function findMaximumScore(nums) {
    let score = 0, max = 0;
    const lim = nums.length - 1;
    for (let i = 0; i < lim; i++) {
        max = Math.max(nums[i], max);
        score += max;
    }
    return score;
}
