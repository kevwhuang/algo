// 3046 - Split the Array

function isPossibleToSplit(nums) {
    const bucket = new Array(101).fill(0);
    for (let i = 0; i < nums.length; i++) {
        if (++bucket[nums[i]] > 2) return false;
    }
    return true;
}
