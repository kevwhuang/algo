// 4014. Minimum Total Price After Applying Discounts

function minPrice(prices, discounts) {
    prices = new Uint32Array(prices).sort();
    discounts = new Uint32Array(discounts).sort();
    let res = 0, i = prices.length - 1, j = discounts.length - 1;
    while (~i && ~j) res += prices[i--] * (100 - discounts[j--]) / 100;
    while (~i) res += prices[i--];
    return res;
}
