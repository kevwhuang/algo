// 3194 - Minimum Average of Smallest and Largest Elements

function minimumAverage(nums) {
    nums = new Uint8Array(nums).sort();
    let min = 100, n = nums.length;
    for (let i = 0; i < n; i++) {
        min = Math.min(nums[i] + nums[n - i - 1], min);
    }
    return min / 2;
}
