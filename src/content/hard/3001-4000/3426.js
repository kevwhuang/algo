// 3426 - Manhattan Distances of All Arrangements of Pieces

function distanceSum(m, n, k) {
    function init() {
        dict1 = new BigUint64Array(100000), dict1[0] = 1n;
        for (let i = 1; i < 100000; i++) {
            dict1[i] = dict1[i - 1] * BigInt(i) % 1000000007n;
        }
        dict2 = new BigUint64Array(100000), dict2[99999] = 784698576n;
        for (let i = 99998; ~i; i--) {
            dict2[i] = dict2[i + 1] * BigInt(i + 1) % 1000000007n;
        }
    }
    if (!this.dict1) init();
    const mm = BigInt(m), nn = BigInt(n);
    const a = (mm - 1n) * mm * (mm + 1n) * nn ** 2n;
    const b = (nn - 1n) * nn * (nn + 1n) * mm ** 2n;
    const c = dict1[m * n - 2] * dict2[m * n - k] * dict2[k - 2];
    return Number((a + b) * c * 166666668n % 1000000007n);
}
