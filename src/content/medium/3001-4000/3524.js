// 3524 - Find X Value of Array I

function resultArray(nums, k) {
    const res = new Array(k).fill(0);
    const dp1 = new Uint32Array(k);
    const dp2 = new Uint32Array(k);
    for (let i = 0; i < nums.length; i++) {
        const mod = nums[i] % k;
        dp2[mod]++;
        for (let j = 0; j < k; j++) {
            dp2[mod * j % k] += dp1[j];
        }
        for (let j = 0; j < k; j++) {
            res[j] += dp1[j] = dp2[j];
        }
        dp2.fill(0);
    }
    return res;
}
