// 26 - Remove Duplicates From Sorted Array

function removeDuplicates(nums) {
    let l = 0, r = 0;
    while (++r < nums.length) if (nums[l] !== nums[r]) nums[++l] = nums[r];
    return l + 1;
}
