// 2412 - Minimum Money Required Before Transactions

function minimumMoney(transactions) {
    let res = 0, max = 0, i = -1;
    while (++i < transactions.length) {
        const a = transactions[i][0], b = transactions[i][1];
        if (a <= b) max = Math.max(a, max);
        else res += a - b, max = Math.max(b, max);
    }
    return res + max;
}
