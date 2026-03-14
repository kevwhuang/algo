// 502 - IPO

function findMaximizedCapital(k, w, profits, capital) {
    const pq1 = new PriorityQueue({ compare: (a, b) => b.p - a.p });
    const pq2 = new PriorityQueue({ compare: (a, b) => a.c - b.c });
    for (let i = 0; i < profits.length; i++) {
        const data = { p: profits[i], c: capital[i] };
        (capital[i] <= w ? pq1 : pq2).enqueue(data);
    }
    while (k-- && pq1.size()) {
        w += pq1.dequeue().p;
        while (pq2.size() && pq2.front().c <= w) pq1.enqueue(pq2.dequeue());
    }
    return w;
}
