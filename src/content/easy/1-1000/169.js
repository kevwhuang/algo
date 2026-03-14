// 169 - Majority Element

function majorityElement(nums) {
    let res, acc = 0, i = -1;
    while (++i < nums.length) {
        if (acc === 0) res = nums[i];
        acc += res === nums[i] ? 1 : -1;
    }
    return res;
}
