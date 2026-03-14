// 3542 - Minimum Operations to Convert All Elements to Zero

function minOperations(nums) {
    if (!this.S) S = new Uint32Array(100000);
    let res = 1, i = -1, j = -1;
    while (++i < nums.length) {
        const cur = nums[i];
        while (~j && S[j] > cur) res++ && j--;
        if (cur < 1) continue;
        if (j < 0 || S[j] < cur) S[++j] = cur;
    }
    return res + j;
}
