// 2501 - Longest Square Streak in an Array

function longestSquareStreak(nums) {
    nums = new Uint32Array(nums).sort();
    let max = -1;
    const arr = new Uint32Array(nums.at(-1) + 1);
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (nums[i - 1] === num) continue;
        const sqrt = num ** .5;
        arr[num] = sqrt === sqrt >> 0 ? arr[sqrt] + 1 : 1;
        if (arr[num] >= 2) max = Math.max(arr[num], max);
    }
    return max;
}
