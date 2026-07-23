// 3952. Maximum Total Value of Covered Indices

function maxTotal(nums, s) {
    let res = 0;
    for (let min = 0, i = 0; i < s.length; i++) {
        if (s[i] === '0') min = nums[i];
        else res += Math.max(min, nums[i]), min = Math.min(nums[i], min);
    }
    return res;
}
