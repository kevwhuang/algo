// 2462 - Total Cost to Hire K Workers

function totalCost(costs, k, candidates) {
    const comparator = (a, b) => a - b;
    let cost = 0, l = candidates - 1, r = costs.length - candidates;
    if (costs.length === k || l >= r) {
        const heap = new PriorityQueue({ compare: comparator });
        costs.forEach(e => heap.enqueue(e));
        while (k--) cost += heap.dequeue();
        return cost;
    }
    const heap1 = new PriorityQueue({ compare: comparator });
    const heap2 = new PriorityQueue({ compare: comparator });
    for (let i = 0; i <= l; i++) {
        heap1.enqueue(costs[i]);
    }
    for (let i = r; i < costs.length; i++) {
        heap2.enqueue(costs[i]);
    }
    while (k--) {
        if (heap1.size() && heap2.size() && heap1.front() <= heap2.front()) {
            cost += heap1.dequeue();
            if (l + 1 === r) continue;
            heap1.enqueue(costs[++l]);
        } else {
            cost += heap2.dequeue();
            if (l + 1 === r) continue;
            heap2.enqueue(costs[--r]);
        }
    }
    return cost;
}
