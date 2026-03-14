// 3788 - Maximum Score of a Split

function maximumScore(nums) {
    let res = -Infinity, min = Infinity;
    let acc = nums.reduce((s, e) => s + e);
    for (let i = nums.length - 1; i; i--) {
        acc -= nums[i];
        min = Math.min(nums[i], min);
        res = Math.max(acc - min, res);
    }
    return res;
}
