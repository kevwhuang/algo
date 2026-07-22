// 3974. Maximum Total Sum of K Selected Elements

function maxSum(nums, k, mul) {
    nums = new Uint32Array(nums).sort();
    let res = 0;
    for (let i = nums.length - 1; k; k--, i--) {
        if (mul <= 0) res += nums[i];
        else res += nums[i] * mul--;
    }
    return res;
}
