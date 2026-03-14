// 121 - Best Time to Buy and Sell Stock

function maxProfit(prices) {
    let res = 0, min = Infinity, i = -1;
    while (++i < prices.length) {
        min = Math.min(prices[i], min);
        res = Math.max(prices[i] - min, res);
    }
    return res;
}
