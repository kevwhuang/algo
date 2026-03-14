// 2110 - Number of Smooth Descent Periods of a Stock

function getDescentPeriods(prices) {
    let periods = 1, window = 1;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] - 1 === prices[i]) window++;
        else window = 1;
        periods += window;
    }
    return periods;
}
