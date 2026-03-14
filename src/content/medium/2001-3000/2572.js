// 2572 - Count the Number of Square-Free Subsets

function squareFreeSubsets(nums) {
    const dict = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    const dp = new Uint32Array(1024);
    dp[0] = 1;
    let acc = 0, i = -1;
    while (++i < nums.length) {
        if (nums[i] === 1 && ++acc) continue;
        let mask = 0, cur = nums[i], j = -1;
        while (++j < 10) {
            if (cur % dict[j]) continue;
            mask |= 1 << j, cur /= dict[j];
            if (cur % dict[j]) continue;
            cur = 0;
            break;
        }
        if (cur === 0) continue;
        j = -1;
        while (++j < 1024) {
            if (mask & j || dp[j] === 0) continue;
            dp[mask | j] = (dp[mask | j] + dp[j]) % 1000000007;
        }
    }
    const k = 1n << BigInt(acc);
    const sum = BigInt(dp.reduce((s, e) => (s + e) % 1000000007));
    return Number((k * sum + 1000000006n) % 1000000007n);
}
