// 309 - Best Time to Buy and Sell Stock With Cooldown

function maxProfit(prices) {
    let a = 0, b = -Infinity, c = 0, i = -1;
    while (++i < prices.length) {
        const cur = a;
        a = b + prices[i];
        b = Math.max(c - prices[i], b);
        c = Math.max(cur, c);
    }
    return Math.max(a, c);
}
