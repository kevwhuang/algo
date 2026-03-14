// 485 - Max Consecutive Ones

function findMaxConsecutiveOnes(nums) {
    let max = 0, acc = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) max = Math.max(++acc, max);
        else max = Math.max(acc, max), acc = 0;
    }
    return max;
}
