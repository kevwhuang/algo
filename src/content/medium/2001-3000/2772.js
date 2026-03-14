// 2772 - Apply Operations to Make All Array Elements Equal to Zero

function checkArray(nums, k) {
    let window = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < window) return false;
        nums[i] -= window;
        window += nums[i];
        if (i + 1 >= k) window -= nums[i - k + 1];
    }
    return window === 0;
}
