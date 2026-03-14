// 204 - Count Primes

function countPrimes(n) {
    let count = 0;
    const sieve = new Uint8Array(n);
    const bound = Math.sqrt(n);
    for (let i = 2; i < n; i++) {
        if (sieve[i]) continue;
        count++;
        if (i > bound) continue;
        for (let j = i * i; j < n; j += i) {
            sieve[j] = true;
        }
    }
    return count;
}
