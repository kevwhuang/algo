// 3667 - Sort Array by Absolute Value

function sortByAbsoluteValue(nums) {
    return nums.sort((a, b) => Math.abs(a) - Math.abs(b));
}
