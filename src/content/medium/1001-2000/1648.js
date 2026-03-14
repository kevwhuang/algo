// 1648 - Sell Diminishing-Valued Colored Balls

function maxProfit(inventory, orders) {
    let res = 0n, i = 0;
    const arr = new Uint32Array(inventory).sort().reverse();
    const mod = 1000000007n;
    while (++i < arr.length) {
        const ops = i * (arr[i - 1] - arr[i]);
        if (orders <= ops) break;
        orders -= ops;
        const a = BigInt(arr[i]), b = BigInt(arr[i - 1]);
        res += BigInt(i) * (a + b + 1n) * (b - a) / 2n;
        res %= mod;
    }
    const num = arr[i - 1] - (orders / i >> 0);
    const a1 = BigInt(Math.max(num, 0));
    const a2 = BigInt(Math.max(num - 1, 0));
    const b = BigInt(arr[i - 1]);
    res += BigInt(i - orders % i) * (a1 + b + 1n) * (b - a1) / 2n;
    res += BigInt(orders % i) * (a2 + b + 1n) * (b - a2) / 2n;
    return Number(res % mod);
}
