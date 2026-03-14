// 724 - Find Pivot Index

function pivotIndex(nums) {
    let leftSum = 0, rightSum = nums.reduce((s, e) => s + e, 0);
    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i - 1] || 0;
        rightSum -= nums[i];
        if (leftSum === rightSum) return i;
    }
    return -1;
}
