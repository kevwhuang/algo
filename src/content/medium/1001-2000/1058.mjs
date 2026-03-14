// 1058 - Minimize Rounding Error to Meet Target

function minimizeError(prices, target) {
    let error = 0, arr = [];
    for (let i = 0; i < prices.length; i++) {
        target -= +prices[i] >> 0;
        const dec = +prices[i].slice(-3);
        dec && arr.push(dec) && (error += dec);
    }
    if (target < 0 || arr.length < target) return '-1';
    error += 1000 * target;
    arr.sort((a, b) => a - b);
    while (target--) error -= 2 * arr.pop();
    return (error / 1000).toFixed(3);
}
