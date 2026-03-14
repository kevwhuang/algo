// 80 - Remove Duplicates From Sorted Array II

function removeDuplicates(nums) {
    let k = nums.length === 1 ? 1 : 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] === nums[k - 2] && nums[i] === nums[k - 1]) continue;
        nums[k++] = nums[i];
    }
    return k;
}
