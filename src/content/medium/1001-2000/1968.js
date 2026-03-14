// 1968 - Array With Elements Not Equal to Average of Neighbors

function rearrangeArray(nums) {
    const swap = i => [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    const bound = nums.length - 1;
    for (let i = 1; i < bound; i++) {
        if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) swap(i);
        else if (nums[i - 1] > nums[i] && nums[i] > nums[i + 1]) swap(i);
    }
    return nums;
}
