// 3918. Sum of Primes Between Number and Its Reverse

function sumOfPrimesInRange(n) {
    function init() {
        pre = new Uint32Array(1001);
        for (let i = 2; i < 1001; i++) {
            if (pre[i]) continue;
            for (let j = i * i; j < 1001; j += i) {
                pre[j] = 1;
            }
        }
        for (let acc = 0, i = 2; i < 1001; i++) {
            if (pre[i] === 0) acc += i;
            pre[i] = acc;
        }
    }
    if (!this.pre) init();
    let a = 0, cur = n;
    while (cur) a = 10 * a + cur % 10, cur = cur / 10 >> 0;
    return pre[Math.max(a, n)] - pre[Math.min(a, n) - 1];
}
