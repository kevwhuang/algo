// 3375 - Minimum Operations to Make Array Values Equal to K

function minOperations(nums, k) {
    const arr = new Uint8Array(100 - k);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < k) return -1;
        arr[nums[i] - k - 1] = 1;
    }
    return arr.reduce((s, e) => s + e, 0);
}
