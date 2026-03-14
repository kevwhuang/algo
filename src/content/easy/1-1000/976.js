// 976 - Largest Perimeter Triangle

function largestPerimeter(nums) {
    nums.sort((a, b) => b - a);
    for (let i = 0, a, b, c; i < nums.length - 2; i++) {
        a = nums[i];
        b = nums[i + 1];
        c = nums[i + 2];
        if (a < b + c) return a + b + c;
    }
    return 0;
}
