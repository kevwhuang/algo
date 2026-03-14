// 3711 - Maximum Transactions Without Negative Balance

function maxTransactions(transactions) {
    const pq = new PriorityQueue((a, b) => a - b);
    const n = transactions.length;
    let res = n, acc = 0, i = -1;
    while (++i < n) {
        const cur = transactions[i];
        acc += cur;
        if (cur < 0) pq.enqueue(cur);
        if (acc < 0) res--, acc -= pq.dequeue();
    }
    return res;
}
