// 3379 - Transformed Array

function constructTransformedArray(nums) {
    const n = nums.length;
    return nums.map((e, i) => nums[(i + n + e % n) % n]);
}
