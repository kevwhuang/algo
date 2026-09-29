// 4063. Longest Subarray Divisible by K With at Most One Negation I

function longestSubarray(nums, k) {
    if (!this.A1) A1 = new Uint32Array(1000), A2 = new Uint32Array(1000);
    if (!this.A3) A3 = new Uint32Array(1e5);
    A3.fill(1e6, 0, k);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        A1[i] = (nums[i] % k + k) % k, A2[i] = 2 * A1[i] % k;
    }
    let res = 0;
    for (let i = 0; i < n - res; i++) {
        for (let acc = 0, j = i; j < n; j++) {
            acc = (acc + A1[j]) % k, A3[A2[j]] = i;
            if (acc === 0 || A3[acc] === i) res = Math.max(j - i + 1, res);
        }
    }
    return res;
}
