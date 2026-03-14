// 2483 - Minimum Penalty for a Shop

function bestClosingTime(customers) {
    let res = 0, min = 0, penalty = 0;
    for (let i = 0; i < customers.length; i++) {
        customers[i] === 'N' ? penalty++ : penalty--;
        if (penalty >= min) continue;
        res = i + 1;
        min = penalty;
    }
    return res;
}
