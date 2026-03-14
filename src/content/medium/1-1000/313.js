// 313 - Super Ugly Number

function nthSuperUglyNumber(n, primes) {
    const dp = new Uint32Array(n);
    dp[0] = 1;
    const indices = new Uint16Array(primes.length);
    for (let i = 1; i < n; i++) {
        let min = Infinity;
        for (let j = 0; j < primes.length; j++) {
            min = Math.min(primes[j] * dp[indices[j]], min);
        }
        for (let j = 0; j < primes.length; j++) {
            if (min === primes[j] * dp[indices[j]]) indices[j]++;
        }
        dp[i] = min;
    }
    return dp[n - 1];
}
