// 935 - Knight Dialer

function knightDialer(n) {
    function init() {
        arr = new Uint32Array(5001);
        const mod = 1000000007;
        for (let a = 4, b = 2, c = 2, d = 1, i = 1; i < 5001; i++) {
            arr[i] = (a + b + c + d) % mod;
            const aa = (b + b + c + c) % mod;
            const cc = (a + d + d) % mod;
            b = a, d = c, a = aa, c = cc;
        }
        arr[1]++;
    }
    if (this.arr === undefined) init();
    return arr[n];
}
