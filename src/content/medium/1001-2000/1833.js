// 1833 - Maximum Ice Cream Bars

function maxIceCream(costs, coins) {
    const freqs = new Array(100001).fill(0);
    for (let i = 0; i < costs.length; i++) {
        freqs[costs[i]]++;
    }
    let bars = 0;
    for (let n = 1, buy; n <= 100000; n++) {
        if (n > coins) break;
        if (freqs[n] === 0) continue;
        buy = Math.min(~~(coins / n), freqs[n]);
        coins -= buy * n;
        bars += buy;
    }
    return bars;
}
