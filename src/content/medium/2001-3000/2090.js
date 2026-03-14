// 2090 - K Radius Subarray Averages

function getAverages(nums, k) {
    const res = new Int32Array(nums.length).fill(-1);
    const double = k + k, size = double + 1;
    let window = 0;
    for (let i = 0; i < nums.length; i++) {
        window += nums[i];
        if (i < double) continue;
        res[i - k] = window / size >> 0;
        window -= nums[i - double];
    }
    return res;
}
