// 2366 - Minimum Replacements to Sort the Array

function minimumReplacement(nums) {
    let res = 0, prev = nums.at(-1), i = nums.length - 1;
    while (~--i) {
        const cur = nums[i];
        if (cur < prev) prev = cur;
        if (cur === prev) continue;
        const div = Math.ceil(cur / prev);
        res += div - 1, prev = cur / div >> 0;
    }
    return res;
}
