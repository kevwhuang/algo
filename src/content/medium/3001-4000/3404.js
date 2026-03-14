// 3404 - Count Special Subsequences

function numberOfSubsequences(nums) {
    let res = 0;
    const B = new Map();
    for (let i = 4; i < nums.length; i++) {
        for (let j = 0; j < i - 3; j++) {
            const div = nums[j] / nums[i - 2];
            B.set(div, (B.get(div) ?? 0) + 1);
        }
        for (let j = i + 2; j < nums.length; j++) {
            res += B.get(nums[j] / nums[i]) ?? 0;
        }
    }
    return res;
}
