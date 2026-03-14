// 1801 - Number of Orders in the Backlog

function getNumberOfBacklogOrders(orders) {
    function process(e) {
        const pq = e[2] ? buy : sell;
        while (pq.size()) {
            if (pq === buy && pq.front()[0] < e[0]) break;
            if (pq === sell && pq.front()[0] > e[0]) break;
            if (e[1] === pq.front()[1]) return pq.dequeue();
            if (e[1] < pq.front()[1]) return pq.front()[1] -= e[1];
            e[1] -= pq.dequeue()[1];
        }
        if (e[1]) (e[2] ? sell : buy).enqueue(e);
    }
    const buy = new PriorityQueue({ compare: (a, b) => b[0] - a[0] });
    const sell = new PriorityQueue({ compare: (a, b) => a[0] - b[0] });
    orders.forEach(process);
    let res = 0, mod = 1000000007;
    while (buy.size()) res = (res + buy.dequeue()[1]) % mod;
    while (sell.size()) res = (res + sell.dequeue()[1]) % mod;
    return res;
}
