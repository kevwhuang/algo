// 3652 - Best Time to Buy and Sell Stock Using Strategy

function maxProfit(prices, strategy, k) {
    const sum = prices.reduce((s, e, i) => s + e * strategy[i], 0);
    const kk = k / 2, n = prices.length;
    let acc1 = 0, acc2 = 0, i = 0;
    while (i < kk) acc1 += prices[i] * strategy[i++];
    while (i < k) acc1 += prices[i] * strategy[i], acc2 += prices[i++];
    let res = Math.max(sum + acc2 - acc1, sum);
    while (i < n) {
        acc1 += prices[i] * strategy[i] - prices[i - k] * strategy[i - k];
        acc2 += prices[i] - prices[i++ - kk];
        res = Math.max(sum + acc2 - acc1, res);
    }
    return res;
}
