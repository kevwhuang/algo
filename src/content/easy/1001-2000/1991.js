// 1991 - Find the Middle Index in Array

function findMiddleIndex(nums) {
    let left = 0, right = nums.reduce((s, e) => s + e);
    for (let i = 0; i < nums.length; i++) {
        if (i) left += nums[i - 1];
        right -= nums[i];
        if (left === right) return i;
    }
    return -1;
}
