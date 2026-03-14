// 2239 - Find Closest Number to Zero

function findClosestNumber(nums) {
    let res = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const abs = Math.abs(nums[i]);
        if (abs < Math.abs(res)) res = nums[i];
        else if (abs === Math.abs(res) && nums[i] > res) res = nums[i];
    }
    return res;
}
