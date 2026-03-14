// 2898 - Maximum Linear Stock Score

function maxScore(prices) {
    const map = new Map();
    for (let i = 0; i < prices.length; i++) {
        const diff = prices[i] - i;
        map.set(diff, (map.get(diff) ?? 0) + prices[i]);
    }
    return Math.max(...map.values());
}
