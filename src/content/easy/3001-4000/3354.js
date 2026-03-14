// 3354 - Make Array Elements Equal to Zero

function countValidSelections(nums) {
    let res = 0, ps = 0, ss = nums.reduce((s, e) => s + e);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) ps += nums[i], ss -= nums[i];
        else if (ps === ss) res += 2;
        else if (Math.abs(ps - ss) === 1) res++;
    }
    return res;
}
