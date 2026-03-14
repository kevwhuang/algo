// 775 - Global and Local Inversions

function isIdealPermutation(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(i - nums[i]) > 1) return false;
    }
    return true;
}
