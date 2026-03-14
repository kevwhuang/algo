// 553 - Optimal Division

function optimalDivision(nums) {
    if (nums.length === 1) return nums[0].toString();
    if (nums.length === 2) return nums.join('/');
    return `${nums[0]}/(${nums.slice(1).join('/')})`;
}
