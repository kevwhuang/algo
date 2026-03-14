// 1169 - Invalid Transactions

function invalidTransactions(transactions) {
    const invalid = [], len = transactions.length;
    const data = new Array(len);
    for (let i = 0; i < len; i++) {
        data[i] = transactions[i].split(',');
    }
    for (let i = 0; i < len; i++) {
        if (data[i][2] > 1000) {
            invalid.push(transactions[i]);
            continue;
        }
        for (let j = 0; j < len; j++) {
            if (data[i][0] !== data[j][0]) continue;
            if (data[i][1] - 60 > data[j][1]) continue;
            if (+data[i][1] + 60 < data[j][1]) continue;
            if (data[i][3] === data[j][3]) continue;
            invalid.push(transactions[i]);
            break;
        }
    }
    return invalid;
}
