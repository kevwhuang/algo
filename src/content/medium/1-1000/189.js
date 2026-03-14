// 189 - Rotate Array

function rotate(nums, k) {
    function reverse(l, r) {
        while (l < r) [nums[l++], nums[r--]] = [nums[r], nums[l]];
    }
    k %= nums.length;
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
}
