// 2148 - Count Elements With Strictly Smaller and Greater Elements

function countElements(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return nums.reduce((s, e) => s + (min < e && e < max && 1), 0);
}
