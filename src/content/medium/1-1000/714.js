// 714 - Best Time to Buy and Sell Stock With Transaction Fee

function maxProfit(prices, fee) {
    let res = 0, max = -Infinity, i = -1;
    while (++i < prices.length) {
        res = Math.max(max + prices[i], res);
        max = Math.max(res - fee - prices[i], max);
    }
    return res;
}
