// 3780 - Maximum Sum of Three Numbers Divisible by Three

function maximumSum(nums) {
    let a = -Infinity, b = a, c = a, d = a, e = a, f = a, g = a, h = a, i = a;
    for (let j = 0; j < nums.length; j++) {
        const k = nums[j];
        if (k % 3 === 0) {
            if (k > a) c = b, b = a, a = k;
            else if (k > b) c = b, b = k;
            else if (k > c) c = k;
        } else if (k % 3 === 1) {
            if (k > d) f = e, e = d, d = k;
            else if (k > e) f = e, e = k;
            else if (k > f) f = k;
        } else {
            if (k > g) i = h, h = g, g = k;
            else if (k > h) i = h, h = k;
            else if (k > i) i = k;
        }
    }
    return Math.max(0, a + b + c, d + e + f, g + h + i, a + d + g);
}
