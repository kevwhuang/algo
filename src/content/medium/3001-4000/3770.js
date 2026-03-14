// 3770 - Largest Prime From Consecutive Prime Sum

function largestPrime(n) {
    function init() {
        const dict = new Uint8Array(499988);
        const set = new Set();
        for (let i = 2; i < 499988; i++) {
            if (dict[i]) continue;
            set.add(i);
            for (let j = i * i; j < 499988; j += i) {
                dict[j] = 1;
            }
        }
        A = [];
        for (let acc = 0, i = 2; i < 499988; i++) {
            if (dict[i]) continue;
            acc += i;
            if (set.has(acc)) A.push(acc);
        }
    }
    if (!this.A) init();
    let l = 0, r = A.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (A[m] <= n) l = m + 1;
        else r = m - 1;
    }
    return ~r ? A[r] : 0;
}
