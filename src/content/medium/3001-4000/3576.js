// 3576 - Transform Array to All Equal Elements

function canMakeEqual(nums, k) {
    function check(tgt) {
        let acc = 0, flag, i = -1;
        while (++i < n) {
            flag = (flag ? -nums[i] : nums[i]) !== tgt;
            if (flag && ++acc > k) return false;
        }
        return (flag ? -nums[i] : nums[i]) === tgt;
    }
    const n = nums.length - 1;
    return check(1) || check(-1);
}
