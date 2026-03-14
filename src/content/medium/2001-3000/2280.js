// 2280 - Minimum Lines to Represent a Line Chart

function minimumLines(stockPrices) {
    stockPrices.sort((a, b) => a[0] - b[0]);
    let lines = 0, prev = [];
    for (let i = 1; i < stockPrices.length; i++) {
        const dy = BigInt(stockPrices[i][1] - stockPrices[i - 1][1]);
        const dx = BigInt(stockPrices[i][0] - stockPrices[i - 1][0]);
        if (prev.length && dx * prev[0] === dy * prev[1]) continue;
        lines++;
        prev[0] = dy, prev[1] = dx;
    }
    return lines;
}
