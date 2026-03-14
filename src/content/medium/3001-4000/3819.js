// 3819 - Rotate Non-Negative Elements

function rotateElements(nums, k) {
    const A = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) A.push(nums[i]);
    }
    const n = A.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) nums[i] = A[k++ % n];
    }
    return nums;
}
