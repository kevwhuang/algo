// 3670 - Maximum Product of Two Integers With No Common Bits

function maxProduct(nums) {
    if (!this.dp) dp = new Uint32Array(2 ** 20);
    const mask = (1 << Math.log2(Math.max(...nums)) + 1) - 1;
    dp.fill(0, 0, mask + 1);
    nums.forEach(e => dp[e] = e);
    for (let i = 1; i < mask; i *= 2) {
        for (let j = 0; j <= mask; j += i + i) {
            for (let k = j; k < j + i; k++) {
                dp[k ^ i] = Math.max(dp[k], dp[k ^ i]);
            }
        }
    }
    return nums.reduce((s, e) => Math.max(e * dp[e ^ mask], s), 0);
}
