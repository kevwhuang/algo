// 1353 - Maximum Number of Events That Can Be Attended

function maxEvents(events) {
    events.sort((a, b) => a[0] - b[0]);
    let res = 0, acc = 1, i = 0;
    const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    const n = events.length;
    while (i < n || pq.size()) {
        while (i < n && events[i][0] === acc) pq.enqueue(events[i++]);
        if (pq.size() && pq.dequeue()) res++;
        while (pq.size() && pq.front()[1] === acc) pq.dequeue();
        acc++;
    }
    return res;
}
