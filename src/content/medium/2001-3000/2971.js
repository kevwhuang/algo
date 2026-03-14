// 2971 - Find Polygon With the Largest Perimeter

function largestPerimeter(nums) {
    let sum = nums.reduce((s, e) => s + e);
    while (nums.length >= 3) {
        let idx = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[idx]) idx = i;
        }
        if (sum - nums[idx] > nums[idx]) return sum;
        sum -= nums[idx];
        nums.splice(idx, 1);
    }
    return -1;
}
