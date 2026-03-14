// 3610 - Minimum Number of Primes to Sum to Target

function minNumberOfPrimes(n, m) {
    function init() {
        dict = [], dp = new Uint16Array(1001);
        for (let i = 2; dict.length < 169; i++) {
            const sqrt = Math.sqrt(i);
            let j = 2;
            while (j <= sqrt && i % j) j++;
            if (j > sqrt) dict.push(i);
        }
    }
    if (!this.dict) init();
    dp.fill(1000, 0, n + 1)[0] = 0;
    for (let i = 0; i < m && dict[i] <= n; i++) {
        const cur = dict[i];
        for (let j = cur; j <= n; j++) {
            dp[j] = Math.min(dp[j - cur] + 1, dp[j]);
        }
    }
    return dp[n] < 1000 ? dp[n] : -1;
}
