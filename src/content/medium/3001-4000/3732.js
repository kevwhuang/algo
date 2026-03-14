// 3732 - Maximum Product of Three Elements After One Replacement

function maxProduct(nums) {
    let a = 0, b = 0, i = -1;
    while (++i < nums.length) {
        const abs = Math.abs(nums[i]);
        if (abs > a) b = a, a = abs;
        else if (abs > b) b = abs;
    }
    return 100000 * a * b;
}
