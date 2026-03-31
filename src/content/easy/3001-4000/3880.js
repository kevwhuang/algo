// 3880. Minimum Absolute Difference Between Two Values

function minAbsoluteDifference(nums) {
    let res = Infinity, a = -1, b = -1, i = -1;
    while (++i < nums.length) {
        if (nums[i] === 1) {
            if (~b) res = Math.min(i - b, res);
            a = i;
        } else if (nums[i] === 2) {
            if (~a) res = Math.min(i - a, res);
            b = i;
        }
    }
    return res < Infinity ? res : -1;
}
