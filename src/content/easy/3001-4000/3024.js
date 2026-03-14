// 3024 - Type of Triangle II

function triangleType(nums) {
    const a = nums[0], b = nums[1], c = nums[2];
    if (a + b <= c || a + c <= b || b + c <= a) return 'none';
    if (a === b && b === c) return 'equilateral';
    return a === b || a === c || b === c ? 'isosceles' : 'scalene';
}
