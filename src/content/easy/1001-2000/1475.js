// 1475 - Final Prices With a Special Discount in a Shop

function finalPrices(prices) {
    const n = prices.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (prices[j] > prices[i]) continue;
            prices[i] -= prices[j];
            break;
        }
    }
    return prices;
}
