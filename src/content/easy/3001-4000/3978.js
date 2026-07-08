// 3978. Unique Middle Element

function isMiddleElementUnique(nums) {
    const tgt = nums[nums.length >> 1];
    return nums.reduce((s, e) => s + (e === tgt), 0) === 1;
}
