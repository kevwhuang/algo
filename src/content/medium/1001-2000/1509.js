// 1509 - Minimum Difference Between Largest and Smallest Value in Three Moves

function minDifference(nums) {
    if (nums.length <= 4) return 0;
    const len = nums.length;
    for (let i = 0; i < 4; i++) {
        let swap = i;
        for (let j = i + 1; j < len; j++) {
            if (nums[j] < nums[swap]) swap = j;
        }
        [nums[i], nums[swap]] = [nums[swap], nums[i]];
    }
    for (let i = len - 1; i >= len - 4; i--) {
        let swap = i;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] > nums[swap]) swap = j;
        }
        [nums[i], nums[swap]] = [nums[swap], nums[i]];
    }
    let min = nums[len - 1] - nums[3];
    min = Math.min(nums[len - 2] - nums[2], min);
    min = Math.min(nums[len - 3] - nums[1], min);
    return Math.min(nums[len - 4] - nums[0], min);
}
