// 2706 - Buy Two Chocolates

function buyChoco(prices, money) {
    prices.sort((a, b) => a - b);
    const cost = prices[0] + prices[1];
    return cost <= money ? money - cost : money;
}
