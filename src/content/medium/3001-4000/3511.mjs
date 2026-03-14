// 3511 - Make a Positive Array

function makeArrayPositive(nums) {
    let res = 0, acc = 1e18, a = nums[0], b = nums[1], i = 1;
    while (++i < nums.length) {
        acc = Math.min(a + b, acc) + nums[i];
        a = b;
        if (acc > 0) b = nums[i];
        else res++, acc = b = 1e18;
    }
    return res;
}
