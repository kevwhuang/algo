// 2422 - Merge Operations to Turn Array Into a Palindrome

function minimumOperations(nums) {
    let ops = 0, l = 0, r = nums.length - 1;
    while (l < r) {
        if (nums[l] < nums[r]) {
            nums[l + 1] += nums[l];
            ops++, l++;
        } else if (nums[l] > nums[r]) {
            nums[r - 1] += nums[r];
            ops++, r--;
        } else {
            l++, r--;
        }
    }
    return ops;
}
