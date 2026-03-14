// 55 - Jump Game

function canJump(nums) {
    for (let max = 0, i = 0; i < nums.length; i++) {
        if (max < i) return false;
        max = Math.max(i + nums[i], max);
    }
    return true;
}
