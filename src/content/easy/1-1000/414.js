// 414 - Third Maximum Number

function thirdMax(nums) {
    let a = -Infinity, b = -Infinity, c = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (cur > a) c = b, b = a, a = cur;
        else if (cur < a && cur > b) c = b, b = cur;
        else if (cur < b && cur > c) c = cur;
    }
    return c > -Infinity ? c : a;
}
