// 3881. Direction Assignments With Exactly K Visible People

function countVisiblePeople(n, pos, k) {
    function init() {
        A1 = new BigUint64Array(100000), A1[0] = 1n;
        for (let i = 1; i < 100000; i++) {
            A1[i] = A1[i - 1] * BigInt(i) % mod;
        }
        A2 = new BigUint64Array(100000), A2[99999] = 784698576n;
        for (let i = 99998; ~i; i--) {
            A2[i] = A2[i + 1] * BigInt(i + 1) % mod;
        }
    }
    const mod = 1000000007n;
    if (!this.A1) init();
    return Number(2n * A1[n - 1] * A2[k] * A2[n - 1 - k] % mod);
}
