// 1966 - Binary Searchable Numbers in an Unsorted Array

function binarySearchableNumbers(nums) {
    const max = new Array(nums.length);
    max[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max[i] = Math.max(max[i - 1], nums[i]);
    }
    let res = 0, min = Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (max[i] <= nums[i] && nums[i] < min) res++;
        min = Math.min(nums[i], min);
    }
    return res;
}
