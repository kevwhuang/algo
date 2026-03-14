// 1004 - Max Consecutive Ones III

function longestOnes(nums, k) {
    let l = 0, r = 0;
    while (r < nums.length) {
        if (nums[r++] === 0) k--;
        if (k >= 0) continue;
        if (nums[l++] === 0) k++;
    }
    return r - l;
}
