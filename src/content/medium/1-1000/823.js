// 823 - Binary Trees With Factors

function numFactoredBinaryTrees(arr) {
    arr = new Uint32Array(arr).sort();
    let res = 0;
    const dp = new Map(), mod = 1000000007;
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];
        dp.set(a, 1);
        for (let j = 0; j < i; j++) {
            const b = arr[j];
            if (a % b || !dp.has(a / b)) continue;
            dp.set(a, (dp.get(a) + dp.get(b) * dp.get(a / b)) % mod);
        }
        res = (res + dp.get(a)) % mod;
    }
    return res;
}
