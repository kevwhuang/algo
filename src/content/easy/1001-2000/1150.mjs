// 1150 - Check If a Number Is Majority Element in a Sorted Array

function isMajorityElement(nums, target) {
    const n = nums.length;
    if (n === 1) return nums[0] === target;
    return nums.lastIndexOf(target) - nums.indexOf(target) + 1 > n / 2;
}
