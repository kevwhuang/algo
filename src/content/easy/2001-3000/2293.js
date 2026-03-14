// 2293 - Min Max Game

function minMaxGame(nums) {
    while (nums.length > 1) {
        const nextNums = new Uint32Array(nums.length / 2);
        for (let i = 0; i < nextNums.length; i++) {
            const a = nums[i + i], b = nums[i + i + 1];
            nextNums[i] = i % 2 ? Math.max(a, b) : Math.min(a, b);
        }
        nums = nextNums;
    }
    return nums[0];
}
