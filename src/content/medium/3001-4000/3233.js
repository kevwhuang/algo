// 3233 - Find the Count of Numbers Which Are Not Special

function nonSpecialCount(l, r) {
    let primes = 0;
    const n = Math.floor(Math.sqrt(r) + 1);
    const sieve = new Uint8Array(n);
    const ll = Math.sqrt(l), rr = Math.sqrt(n);
    for (let i = 2; i < n; i++) {
        if (sieve[i]) continue;
        if (i >= ll) primes++;
        if (i > rr) continue;
        for (let j = i * i; j < n; j += i) {
            sieve[j] = 1;
        }
    }
    return r - l + 1 - primes;
}
