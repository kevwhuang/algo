// 3745 - Maximize Expression of Three Elements

function maximizeExpressionOfThree(nums) {
    let a = -100, b = -100, c = 100, i = -1;
    while (++i < nums.length) {
        const cur = nums[i];
        if (cur > a) b = a, a = cur;
        else if (cur > b) b = cur;
        c = Math.min(cur, c);
    }
    return a + b - c;
}
