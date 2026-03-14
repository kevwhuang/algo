// 122 - Best Time to Buy and Sell Stock II

function maxProfit(prices) {
    let res = 0, i = 0;
    while (++i < prices.length) {
        if (prices[i - 1] >= prices[i]) continue;
        res += prices[i] - prices[i - 1];
    }
    return res;
}
