// 3221 - Maximum Array Hopping Score II

function maxScore(nums) {
    let score = 0, max = 1;
    for (let i = nums.length - 1; i; i--) {
        if (nums[i] > max) max = nums[i];
        score += max;
    }
    return score;
}
