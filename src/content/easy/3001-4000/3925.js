// 3925. Concatenate Array With Reverse

function concatWithReverse(nums) {
    return [...nums].concat(nums.reverse());
}
