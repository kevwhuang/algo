// 3377 - Digit Operations to Make Two Integers Equal

function minOperations(n, m) {
    function init() {
        sieve = new Uint8Array(10000);
        sieve[1] = 1;
        for (let i = 2; i < 10000; i++) {
            if (sieve[i]) continue;
            for (let j = i * i; j < 10000; j += i) {
                sieve[j] = 1;
            }
        }
    }
    function check(next, cost) {
        if (!sieve[next]) return;
        const nextCost = next + cost;
        if (nextCost >= costs[next]) return;
        costs[next] = nextCost;
        pq.enqueue([next, nextCost]);
    }
    if (this.sieve === undefined) init();
    if (!sieve[n] || !sieve[m]) return -1;
    const costs = {};
    const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    pq.enqueue([n, n]);
    while (pq.size()) {
        const cur = pq.front()[0], cost = pq.dequeue()[1];
        if (cur === m) return cost;
        let num = cur, d = 1;
        while (num) {
            const digit = num % 10;
            num = num / 10 >> 0;
            if (digit < 9) check(cur + d, cost);
            if (num && digit) check(cur - d, cost);
            if (!num && digit > 1) check(cur - d, cost);
            d *= 10;
        }
    }
    return -1;
}
