// 2907 - Maximum Profitable Triplets With Increasing Prices I

function maxProfit(prices, profits) {
    const tgt = prices.reduce((s, e) => Math.max(e, s));
    const arr = new Uint32Array(tgt + 1);
    const ps = new Uint32Array(prices.length);
    for (let i = 0; i < prices.length; i++) {
        for (let j = prices[i]; j <= tgt; j += j & -j) {
            arr[j] = Math.max(profits[i], arr[j]);
        }
        for (let j = prices[i] - 1; j; j -= j & -j) {
            ps[i] = Math.max(arr[j], ps[i]);
        }
    }
    arr.fill(0);
    let res = -1;
    for (let i = prices.length - 1; ~i; i--) {
        if (ps[i]) {
            let max = 0;
            for (let j = tgt - prices[i]; j; j -= j & -j) {
                max = Math.max(arr[j], max);
            }
            if (max) res = Math.max(profits[i] + ps[i] + max, res);
        }
        for (let j = tgt - prices[i] + 1; j <= tgt; j += j & -j) {
            arr[j] = Math.max(profits[i], arr[j]);
        }
    }
    return res;
}
