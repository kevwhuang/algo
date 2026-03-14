// 908 - Smallest Range I

function smallestRangeI(nums, k) {
    let min = Infinity, max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        n < min && (min = n);
        n > max && (max = n);
    }
    const score = max - min - k * 2;
    return score <= 0 ? 0 : score;
}
