// 581 - Shortest Unsorted Continuous Subarray

function findUnsortedSubarray(nums) {
    let start = 0, end = -1, min = 100001, max = -100001;
    let l = 0, r = nums.length - 1;
    while (l < nums.length) {
        if (nums[l] < max) end = l++;
        else max = nums[l++];
        if (nums[r] > min) start = r--;
        else min = nums[r--];
    }
    return end - start + 1;
}
